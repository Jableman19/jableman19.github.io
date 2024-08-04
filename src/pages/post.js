/** @jsxImportSource @emotion/react */
import Gallery from "../components/gallery";
import { useParams } from 'react-router-dom';
import { Divider, Typography } from "@mui/material";
import { css } from "@emotion/react";
import blogPosts from "../data/blogPosts.json";
import React from "react";


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
    marginLeft: '75px', 
    marginRight: '75px',
})

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
}

function Post() {
    const { postNumber } = useParams();    
    const post = blogPosts.find(post => post.id === postNumber);
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
                        {renderDescItem(item)}
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