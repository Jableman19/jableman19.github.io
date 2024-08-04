/** @jsxImportSource @emotion/react */
import { Typography, Card, Divider, Accordion, AccordionSummary, AccordionDetails, Stack} from "@mui/material";
import { css } from "@emotion/react";import React from "react";
import blogPosts from "../data/blogPosts.json";
import { useNavigate } from "react-router-dom";

function Blogs() {
    const navigate = useNavigate();

    //Styles
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
            {/* Typography and Divider remain the same */}
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