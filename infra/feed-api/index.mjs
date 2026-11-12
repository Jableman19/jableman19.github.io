import { randomUUID } from "node:crypto";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand, PutCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const { TABLE, BUCKET, API_TOKEN, AWS_REGION } = process.env;
const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const s3 = new S3Client({ requestChecksumCalculation: "WHEN_REQUIRED" });
const bucketUrl = `https://${BUCKET}.s3.${AWS_REGION}.amazonaws.com/`;

const res = (statusCode, body) => ({
  statusCode,
  headers: { "content-type": "application/json" },
  body: JSON.stringify(body),
});

const toPost = (item) => ({ id: item.sk, url: item.url, caption: item.caption || "", month: item.month });

async function listFeed() {
  const items = [];
  let ExclusiveStartKey;
  do {
    const out = await db.send(new QueryCommand({
      TableName: TABLE,
      KeyConditionExpression: "pk = :pk",
      ExpressionAttributeValues: { ":pk": "post" },
      ScanIndexForward: false,
      ExclusiveStartKey,
    }));
    items.push(...out.Items);
    ExclusiveStartKey = out.LastEvaluatedKey;
  } while (ExclusiveStartKey);
  items.sort((a, b) => b.month.localeCompare(a.month) || b.sk.localeCompare(a.sk));
  return items.map(toPost);
}

function exifMonth(buf) {
  try {
    let i = 2;
    while (i + 4 < buf.length && buf[i] === 0xff && buf[i + 1] !== 0xda) {
      const size = buf.readUInt16BE(i + 2);
      if (buf[i + 1] === 0xe1 && buf.toString("ascii", i + 4, i + 10) === "Exif\0\0") {
        const tiff = i + 10;
        const le = buf.toString("ascii", tiff, tiff + 2) === "II";
        const r16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
        const r32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
        const find = (ifd, tag) => {
          for (let k = 0, n = r16(tiff + ifd); k < n; k++) {
            const e = tiff + ifd + 2 + k * 12;
            if (r16(e) === tag) return r32(e + 8);
          }
          return null;
        };
        const ifd0 = r32(tiff + 4);
        const exifIfd = find(ifd0, 0x8769);
        const at = (exifIfd !== null ? find(exifIfd, 0x9003) : null) ?? find(ifd0, 0x0132);
        const m = at !== null && buf.toString("ascii", tiff + at, tiff + at + 7).match(/^(\d{4}):(\d{2})$/);
        return m ? `${m[1]}-${m[2]}` : null;
      }
      i += 2 + size;
    }
  } catch {}
  return null;
}

async function createPost(body, image) {
  const month = body.month || (image && exifMonth(image.data)) || new Date().toISOString().slice(0, 7);
  if (!/^\d{4}-\d{2}$/.test(month)) return res(400, { error: "month must be YYYY-MM" });
  const id = `${month}_${Date.now()}_${randomUUID().slice(0, 8)}`;
  const key = `photos/${randomUUID()}.jpg`;
  const url = body.url || bucketUrl + key;
  if (image) {
    await s3.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: image.data, ContentType: image.type }));
  }
  await db.send(new PutCommand({
    TableName: TABLE,
    Item: { pk: "post", sk: id, url, month, caption: body.caption || "" },
  }));
  if (body.url || image) return res(201, { id, url });
  const uploadUrl = await getSignedUrl(
    s3,
    new PutObjectCommand({ Bucket: BUCKET, Key: key, ContentType: body.contentType || "image/jpeg" }),
    { expiresIn: 900 }
  );
  return res(201, { id, url, uploadUrl });
}

async function updatePost(id, body) {
  await db.send(new UpdateCommand({
    TableName: TABLE,
    Key: { pk: "post", sk: id },
    UpdateExpression: "SET caption = :c",
    ConditionExpression: "attribute_exists(sk)",
    ExpressionAttributeValues: { ":c": body.caption || "" },
  }));
  return res(200, { id });
}

async function deletePost(id) {
  const out = await db.send(new DeleteCommand({
    TableName: TABLE,
    Key: { pk: "post", sk: id },
    ReturnValues: "ALL_OLD",
  }));
  const url = out.Attributes?.url;
  if (url?.startsWith(bucketUrl)) {
    await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: url.slice(bucketUrl.length) }));
  }
  return res(out.Attributes ? 200 : 404, { id });
}

export const handler = async (event) => {
  const method = event.requestContext.http.method;
  const path = event.rawPath.replace(/\/+$/, "");
  const auth = event.headers.authorization || "";
  console.log(JSON.stringify({
    method,
    path,
    query: event.queryStringParameters,
    contentType: event.headers["content-type"],
    bodyLength: event.body?.length || 0,
    authPrefix: auth.slice(0, 7),
    authLength: auth.length,
    authOk: auth === `Bearer ${API_TOKEN}`,
  }));

  try {
    if (method === "GET" && path === "/feed") return res(200, await listFeed());

    if (auth !== `Bearer ${API_TOKEN}`) return res(401, { error: "unauthorized" });

    const type = event.headers["content-type"] || "";
    const buf = event.body ? Buffer.from(event.body, event.isBase64Encoded ? "base64" : "utf8") : null;

    if (method === "POST" && path === "/posts" && type.startsWith("image/")) {
      if (!buf?.length) return res(400, { error: "missing image" });
      const hex = buf.subarray(0, 4).toString("hex");
      const detected = hex.startsWith("ffd8ff") ? "image/jpeg" : hex === "89504e47" ? "image/png" : null;
      if (!detected) return res(415, { error: "photo must be JPEG or PNG, send the Converted Image as the request body" });
      return await createPost(event.queryStringParameters || {}, { data: buf, type: detected });
    }

    const body = JSON.parse(buf ? buf.toString() : "{}");
    const match = path.match(/^\/posts\/(.+)$/);
    const id = match && decodeURIComponent(match[1]);

    if (method === "POST" && path === "/posts") return await createPost(body);
    if (method === "PATCH" && id) return await updatePost(id, body);
    if (method === "DELETE" && id) return await deletePost(id);
    return res(404, { error: "not found" });
  } catch (err) {
    if (err.name === "ConditionalCheckFailedException") return res(404, { error: "not found" });
    if (err instanceof SyntaxError) return res(400, { error: "invalid json" });
    console.error(err);
    return res(500, { error: "server error" });
  }
};
