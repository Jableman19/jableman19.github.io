/** @jsxImportSource @emotion/react */
import { Typography, Card, Divider, Accordion, AccordionSummary, AccordionDetails, Stack} from "@mui/material";
import { css } from "@emotion/react";import React from "react";

function Showcase() {

    //Styles
    const gridCont = css({
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        marginTop: '30px',
        marginLeft: '75px', 
        marginRight: '75px',
    })

    const gridItem = css({
        marginLeft: '5px', 
        marginRight: '5px',
    })

    const cardStyle = css({
        marginBottom: '10px',
        background: '#f2eeed',
        '&:hover':{
            boxShadow: "5px 5px #49a362"
        }
    })

    const accDate = css({
        textAlign: 'right',
        float: 'right',
        marginLeft:'auto',
        fontSize:"12px"
    })

    const accTitle = css({
        textAlign: 'left',
        float: 'left'
    })

    const accStyle = css({
        backgroundColor: '#F1F1F1'
    })


    //Handles accordion open/close
    const [expanded, setExpanded] = React.useState(" ");

    const handleChange = (panel) => {
        setExpanded(panel);
    };

    return (
        <div>
            <Typography variant = "h4" css={css({marginTop: "25px", marginBottom: "5px", textAlign: "center", fontWeight: 'bold'})}>
                2023 Shift Showcase!
            </Typography>
            <Divider css={css({marginLeft: '100px', marginRight: '100px'})}/>
            <div css={gridCont}>
                {/* Left Col */}
                <Stack css={gridItem}   >
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("CRO")} css = {cardStyle}>
                        <img height={"315px"} src={require('../files/Oshawott.jpg')} alt = "Crocheted Oshawott" css={css({width: 'auto', display: 'block', margin: 'auto'})}></img>
                        <Accordion expanded={expanded === "CRO"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Crochet Projects</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <img height={"315px"} align={'center'} src={require('../files/Mushroom.jpg')} alt = "Crocheted Mushroom" css={css({width: 'auto', display: 'block', margin: 'auto', borderRadius: "30px", marginBottom: "20px"})}></img>
                                <img height={"315px"} align={'center'} src={require('../files/Psyduck.jpg')} alt = "Crocheted Psyduck" css={css({width: 'auto', display: 'block', margin: 'auto', borderRadius: "30px", marginBottom: "20px"})}></img>
                                <Typography >
                                    I started learning how to crochet near the end of summer 2022.
                                    It's been such a great way for me to engage with my creative side and play around with my 3d awareness.
                                    Above are a few of my favorite projects so far!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("CNT")} css = {cardStyle}>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/_3GZqrv8ZNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <Accordion expanded={expanded === "CNT"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css={accTitle}>C-Note</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                C-Note is an augmented reality app that sets out to be an educational tool to help youths learn the basics of sound synthesis and how it plays into music composition. 
                                This was built in C# using Unity's ARFoundation over the course of a month with my capstone project team including myself, Ken, Zach, Jasmine, and Hosni :{")"}
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("PFY")} css = {cardStyle}>
                        <img height={"315px"} src={require('../files/pokefy.gif')} alt = "Pokefy" css={css({width: 'auto', display: 'block', margin: 'auto'})}></img>
                        <Accordion expanded={expanded === "PFY"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Pokemon Spotify App</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <Typography >
                                    Pokefy is a Spotify webapp made in React with the Spotify API.
                                    It analyzes a user's top 50 songs and returns a correspondingly popular Pokemon based
                                    on an internet poll. This was a really fun and quick project for me, as it was my first time
                                    working with a public API, and it was a challenge to get everything running and deployed in 24 hours. 
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("BBB")} css = {cardStyle}>
                        <iframe height="315" width="100%" src="https://www.youtube.com/embed/Vl-r5Yk-pVo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <Accordion expanded={expanded === "BBB"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css={accTitle}>BBB Lab Simulator VR</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                This project is effectively a VR recreation of the BBB CAEN Lab, but with a lot of fun stuff added in, including a Pokemon catching minigame!
                                This was really a lot of fun to work on, and I'm pretty pleased with how it came out!
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("BEY")} css = {cardStyle}>
                        <img height={"315px"} align={'center'} src={require('../files/isaac.gif')} alt = "Isaac using the Beyblade" css={css({width: 'auto', display: 'block', margin: 'auto'})}></img>
                        <Accordion expanded={expanded === "BEY"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>3D Printed Beyblade</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <Typography >
                                    This project was mainly headed by Isaac, and I just sort of tagged along, but it was a really fun process and
                                    I'd be remiss if I didn't include it. This was my first time using CAD in over 4 years, and my first time getting to 3D print something that I helped to design. While it was only a few days,
                                    this project taught me a ton and gave me the confidence to design and print some stuff on my own soon thereafter.
                                </Typography>
                                <img height={"315px"} align={'center'} src={require('../files/CAD.png')} alt = "Beblade CAD" css={css({width: 'auto', display: 'block', margin: 'auto', borderRadius: "30px", marginTop: "10px"})}></img>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </Stack>
                <Stack css={gridItem}>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("ANI")} css = {cardStyle} >
                        <img height={"315px"} src={require('../files/sk8bort.gif')} alt = "Handdrawn skateboarding animation gif" css={css({width: 'auto', display: 'block', margin: 'auto'})}></img>
                        <Accordion expanded={expanded === "ANI"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Animation</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <img height={"315px"} src={require('../files/flipbook.gif')} alt = "flipbook animation gif" css={css({width: 'auto', display: 'block', margin: 'auto'})}></img>
                                <Typography >
                                    This was a very fun project for me. Using Adobe's animation studio, I drew over 50 frames for this 4 second animation.
                                    I also challenged myself to design, print, and bind a physical flipbook.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("SK8")} css = {cardStyle} >
                        <img height={"315px"} src={require('../files/KingPin.gif')} alt = "skateboarding game gif" css={css({width: 'auto', display: 'block', margin: 'auto'})}></img>
                        <Accordion expanded={expanded === "SK8"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Skateboard Street</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <Typography >
                                    One of my favorite projects this year, this game is a 3D skateboarding game made in Unity, and is effectively Subway Surfers - but with a twist! You can do awesome skate tricks B{")"} You can try out the app by scanning the QR code or tapping your phone on the poster!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("RUG")} css = {cardStyle}>
                        <img height={"315px"} align={'center'} src={require('../files/Rug.jpg')} alt = "Rug on frame" css={css({width: 'auto', display: 'block', margin: 'auto'})}></img>
                        <Accordion expanded={expanded === "RUG"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Rug Tufting</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <Typography >
                                    I picked up rug tufting in early 2023 as a way to push myself creatively in the design space. The image above shows the first rug that I designed in blender and photoshop.
                                    This has been a great way for me to share my creativity with others as I have introduced and taught many people how to tuft rugs, and gifted a few as well.  
                                </Typography>
                                <img height={"315px"} align={'center'} src={require('../files/burtbee.jpg')} alt = "BurtsBeesRug" css={css({width: 'auto', display: 'block', margin: 'auto', borderRadius: "30px", marginTop: "10px"})}></img>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("A2G")} css = {cardStyle}>
                        <iframe display='block' height="315" width="100%" src="https://www.youtube.com/embed/g46pAkalxLo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                        <Accordion expanded={expanded === "A2G"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>A2GO</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <Typography >
                                    This project is based on the popualar AR mobile game, Pokemon Go, but with reimagined features and mechanics.
                                    I worked on this app for 3 weeks with my fellow student, Zachary Behrman. This was such a great learning experience for me
                                    as I gained familiarity with Unity's AR features, and mobile targeted development. Made in C# with Unity.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </Stack>
            </div>
        </div>
    )
}

export default Showcase;