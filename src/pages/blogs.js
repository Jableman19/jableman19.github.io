/** @jsxImportSource @emotion/react */
import { Typography, Card, Divider } from "@mui/material";
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const bucketUrl = "https://jableman-blogs.s3.us-east-2.amazonaws.com";

function Blogs() {
    const navigate = useNavigate();
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(
                    `${bucketUrl}?list-type=2&delimiter=/`
                );

                const parser = new DOMParser();
                const xml = parser.parseFromString(res.data, "application/xml");
                const prefixes = xml.getElementsByTagName("CommonPrefixes");

                const posts = [];

                for (let i = 0; i < prefixes.length; i++) {
                    const prefix = prefixes[i]
                        .getElementsByTagName("Prefix")[0]
                        .textContent;

                    const id = prefix.replace("/", "");

                    posts.push({ id });
                }

                const fullPosts = await Promise.all(
                    posts.map(async (post) => {
                        try {
                            const res = await axios.get(
                                `${bucketUrl}/${post.id}/blog.json`
                            );
                            return {
                                id: post.id,
                                title: res.data.title,
                                date: res.data.date
                            };
                        } catch {
                            return {
                                id: post.id,
                                title: `Post ${post.id}`,
                                date: ""
                            };
                        }
                    })
                );

                const sortedPosts = fullPosts.sort((a, b) => {
                    if (a.pinned && !b.pinned) return -1;
                    if (!a.pinned && b.pinned) return 1;

                    return new Date(b.date) - new Date(a.date);
                 });

setBlogPosts(sortedPosts);
            } catch (err) {
                console.error("Error fetching posts:", err);
            }
        };

        fetchPosts();
    }, []);

    function NavPost(id) {
        return () => navigate(`/post/${id}`);
    }

    // Styles
    const Cont = css({
        marginTop: '30px',
        marginLeft: '75px', 
        marginRight: '75px',
        //for mobile
        '@media (max-width: 768px)': {
            marginLeft: '10px', 
            marginRight: '10px',
        },
    })

    const cardStyle = css({
        height: '100px',
        background: '#f2eeed',
        '&:hover':{
            boxShadow: "5px 5px #49a362"
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
        marginBottom: '10px'
    })
    
    const accDate = css({
        margin: '0 20px',
        fontSize:"25px"
    });
    
    const accTitle = css({
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '25px',
        margin: '0 20px',
        '@media (max-width: 768px)': {
            fontSize: '18px',
        },
    });

    function NavPost(id){
        return () => {
            navigate(`/post/${id}`)
        }
    }

    return (
        <div>
            <Typography variant = "h4" css={css({marginTop: "75px", marginBottom: "5px", textAlign: "center", fontWeight: 'bold'})}>
                Blog Posts
            </Typography>
            <Divider css={css({marginLeft: '100px', marginRight: '100px'})}/>
            <div css={Cont}>
                {blogPosts.map(post => (
                    <Card css = {cardStyle} onClick={NavPost(post.id)}>
                            <Typography css = {accTitle} className="title" variant="p">{post.title}</Typography>
                            <Divider orientation="vertical"/>
                            <Typography css = {accDate}>{post.date}</Typography>
                    </Card>        
                ))}
            </div>
        </div>
    )
}

export default Blogs;