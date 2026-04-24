/** @jsxImportSource @emotion/react */
import Gallery from "../components/gallery";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Typography } from "@mui/material";
import { css } from "@emotion/react";
import React from "react";
import axios from 'axios';

const pImage = css({
    width: 'auto',
    display: 'block',
    margin: 'auto',
    borderRadius: "30px", 
    marginBottom: "20px"
})

//Styles
const Cont = css({
    marginTop: '10px',
    marginLeft: '25%', 
    marginRight: '25%',
})

const bucketUrl = "https://jableman-blogs.s3.us-east-2.amazonaws.com";


//Helper function to render description items
const renderDescItem = (desc) => {
    if(desc.type === "text"){
        return <div><br/><Typography>{desc.text}</Typography></div>
    }
    else if(desc.type === "image"){
        return <img height={"315px"} src={desc.url} alt = {desc.alt} css={pImage}></img>
    }
    else if(desc.type === "link"){
        return <a target="_blank" href={desc.url}>{desc.text}</a>
    }
    else if(desc.type === "bullet"){
        return(
        <ul>
            {desc.items.map(item => (
                <li>{item}</li>
            ))}
        </ul>
        )
    }
    else if(desc.type === "spotify"){
        return(
          <div><br/><iframe data-testid="embed-iframe" style={{borderRadius: "12px", paddingLeft:"10%"}} src={desc.link} width="80%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
        )
    }
}

function Post() {
    const { postNumber } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(
                    `${bucketUrl}/${postNumber}/blog.json`
                );
                setPost(res.data);
            } catch (err) {
                console.error("Error fetching post:", err);
            }
        };

        fetchPost();
    }, [postNumber]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <Typography variant = "h5" css={css({marginTop: "85px", marginBottom: "5px", marginLeft:'50px', textAlign: "left", fontWeight: '100'})}>
                {post.date}
            </Typography>
            <Typography variant = "h4" css={css({marginTop: "5px", marginBottom: "5px", textAlign: "left", marginLeft: "50px", fontWeight: 'bold'})}>
                {post.title}
            </Typography>
            <Divider css={css({marginLeft: '50px', marginRight: '100px'})}/>
            {/* Typography and Divider remain the same */}
            <div css={Cont}>
                {post.content.map((item, index) => (
                    <React.Fragment key={index}>
                        {renderDescItem(item, postNumber)}
                    </React.Fragment>
                ))}
            </div>
            <Typography variant = "h4" css={css({marginTop: "75px", marginBottom: "5px", textAlign: "center", fontWeight: 'bold'})}>
                Photo Gallery
            </Typography>
            <Divider css={css({marginLeft: '100px', marginRight: '100px'})}/>
            <Gallery num = {postNumber}/>
        </div>
    );
}

export default Post;