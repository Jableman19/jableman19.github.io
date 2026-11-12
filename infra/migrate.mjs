const [api, token] = process.argv.slice(2);
if (!api || !token) {
  console.error("usage: node infra/migrate.mjs <FEED_API_URL> <API_TOKEN>");
  process.exit(1);
}

const months = {
  "0001": "2024-05",
  "0002": "2024-08",
  "0003": "2024-11",
  "0004": "2025-03",
  "0005": "2025-05",
  "0006": "2025-09",
  "0007": "2025-12",
  "0008": "2026-04",
};

for (const [num, month] of Object.entries(months)) {
  const base = `https://blogbucket${num}.s3.us-east-2.amazonaws.com`;
  const xml = await (await fetch(`${base}?list-type=2`)).text();
  const keys = [...xml.matchAll(/<Key>(.*?)<\/Key>/g)].map((m) => m[1]).filter((k) => !k.endsWith(".json"));
  for (const key of keys) {
    const r = await fetch(`${api.replace(/\/$/, "")}/posts`, {
      method: "POST",
      headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
      body: JSON.stringify({ url: `${base}/${encodeURIComponent(key)}`, month, caption: "" }),
    });
    if (!r.ok) throw new Error(`${num}/${key}: ${r.status} ${await r.text()}`);
  }
  console.log(`blogbucket${num}: ${keys.length} photos -> ${month}`);
}
