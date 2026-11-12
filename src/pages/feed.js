/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Typography, Divider, Dialog, DialogContent } from "@mui/material";
import { css } from "@emotion/react";
import axios from "axios";

const feedApi = "https://q7cyxm5mzhrwd7gdrmvi7vs3gm0nsktm.lambda-url.us-east-2.on.aws";

const formatMonth = (month) =>
    new Date(`${month}-01T00:00:00Z`).toLocaleString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

const styles = {
    gridCont: css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '3px',
        padding: '20px'
    }),
    tile: css({
        position: 'relative',
        aspectRatio: '1',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#f2eeed',
        '&:hover .caption': {
            opacity: 1,
        },
    }),
    imgStyle: css({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
    }),
    month: css({
        margin: '25px 20px 0',
        fontWeight: 'bold',
        color: '#205e31',
    }),
    caption: css({
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '12px',
        color: 'white',
        background: 'linear-gradient(transparent 40%, rgba(0, 0, 0, 0.75))',
        opacity: 0,
        transition: 'opacity 0.2s',
    }),
    dialogImg: css({
        maxWidth: '100%',
        maxHeight: '80vh',
        display: 'block',
    }),
};

function Feed() {
    const [posts, setPosts] = useState([]);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);
    const months = [...new Set(posts.map(post => post.month))];

    useEffect(() => {
        axios.get(`${feedApi}/feed`)
            .then(res => setPosts(res.data))
            .catch(err => console.error("Error fetching feed:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <Typography variant = "h4" css={css({marginTop: "75px", marginBottom: "5px", textAlign: "center", fontWeight: 'bold'})}>
                Feed
            </Typography>
            <Divider css={css({marginLeft: '100px', marginRight: '100px'})}/>
            {(loading || posts.length === 0) && (
                <Typography css={css({marginTop: '40px', marginBottom: '40px', textAlign: 'center'})}>
                    {loading ? "Loading..." : "No posts"}
                </Typography>
            )}
            {months.map(month => (
                <div key={month}>
                    <Typography variant="h5" css={styles.month}>{formatMonth(month)}</Typography>
                    <div css={styles.gridCont}>
                        {posts.filter(post => post.month === month).map(post => (
                            <div key={post.id} css={styles.tile} onClick={() => setSelected(post)}>
                                <img src={post.url} alt={post.caption || formatMonth(post.month)} loading="lazy" css={styles.imgStyle} />
                                {post.caption && <div className="caption" css={styles.caption}>{post.caption}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <Dialog open={!!selected} onClose={() => setSelected(null)} maxWidth="md">
                {selected && (
                    <DialogContent>
                        <img src={selected.url} alt={selected.caption || formatMonth(selected.month)} css={styles.dialogImg} />
                        <Typography css={css({marginTop: '10px', fontWeight: 'bold'})}>{formatMonth(selected.month)}</Typography>
                        {selected.caption && <Typography>{selected.caption}</Typography>}
                    </DialogContent>
                )}
            </Dialog>
        </div>
    );
}

export default Feed;
