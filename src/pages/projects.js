/** @jsxImportSource @emotion/react */
import { Typography, Card, Divider, Accordion, AccordionSummary, AccordionDetails, Stack} from "@mui/material";
import { css } from "@emotion/react";import React from "react";

function Projects() {

    //Styles
    const gridCont = css({
        display: 'grid',
        gridTemplateColumns: '33.3% 33.3% 33.3%',
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
            <Typography variant = "h4" css={css({marginTop: "75px", marginBottom: "5px", textAlign: "center", fontWeight: 'bold'})}>
                Projects
            </Typography>
            <Divider css={css({marginLeft: '100px', marginRight: '100px'})}/>
            <div css={gridCont}>
                {/* Left Col */}
                <Stack css={gridItem}   >
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("BBB")} css = {cardStyle}>
                        <iframe height="315" width="100%" src="https://www.youtube.com/embed/Vl-r5Yk-pVo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <Accordion expanded={expanded === "BBB"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css={accTitle}>BBB Lab Simulator VR</Typography>
                                <Typography css={accDate}>January 2023- February 2023</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <ul>
                                    <li>Spent 3 weeks faithfully recreating a physical space in VR using Unreal Engine 5</li>
                                    <li>Created reusable components and an affordance system taking advantage of polymorphism  to allow for quick development</li>
                                    <li>Worked 15 hours a week in coordination with a partner, using github for version control</li>
                                    <li>Designed and implemented Pokemon minigame in one week</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
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
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("RIN")} css = {cardStyle}>
                        <img height={"315px"} src={require('../files/Rings1.jpg')} alt = "Wooden Rings" css={css({width: 'auto', display: 'block', margin: 'auto'})}></img>
                        <Accordion expanded={expanded === "RIN"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Upcycled Rings</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <Typography >
                                    Creating these rings came from being inspired to reduce my own personal waste. As someone who skateboards, I often find myself throwing out lots of old broken decks. 
                                    I wanted to challenge myself to take those and turn them into something new. While this was my first time working closely with wood, I'm quite proud of the results. 
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </Stack>
                <Stack css={gridItem}>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("SS")} css = {cardStyle}>
                    <iframe display='block' height="315" width="100%" src="https://www.youtube.com/embed/c-45ivGvhIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                        <Accordion expanded={expanded === "SS"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Stutter Speak VR</Typography>
                                <Typography css={accDate}>May 2021- August 2021</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <ul>
                                    <li>Built VR Application focused on assisting people who stutter with public speaking in Unreal Engine 4 with object oriented code practices, using C++ and Blueprint. Launched on the official Oculus store in August 2021</li>
                                    <li>Devoted 40 hours per week to various aspects of development such as coding, design, testing, and coordinating with others</li>
                                    <li>Collaborated with medical professional and speech pathologist, Tricia Krauss-Lehrman, on a bi-weekly basis to help shape the vision for the application</li>
                                    <li>Created various systems to save and display user data, track progress over time and provide feedback, read in custom user files, and handle physics interactions</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
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
                                    This was a very fun project for me. Using Adobe's animation studio, I painstakingly drew over 50 frames for this 4 second animation.
                                    I also challenged myself to design, print, and bind a physical flipbook.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </Stack>
                <Stack css={gridItem}>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("A2G")} css = {cardStyle}>
                        <iframe display='block' height="315" width="100%" src="https://www.youtube.com/embed/g46pAkalxLo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                        <Accordion expanded={expanded === "A2G"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>A2GO</Typography>
                                <Typography css={accDate}>February - March 2023</Typography>
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
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("SAX")} css = {cardStyle}>
                        <img height={"315px"} align={'center'} src={require('../files/SaxSimScreenCap.png')} alt = "Saxo Sim Game Screen" css={css({width: 'auto'})}></img>
                        <Accordion expanded={expanded === "SAX"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Saxophone Simulator</Typography>
                                <Typography css={accDate}>April 2021</Typography>
                            </AccordionSummary>
                            <AccordionDetails css={accStyle}>
                                <ul>
                                    <li>Made in one week using Unity Engine and C#</li>
                                    <li>Recorded and mixed all the sound, handled coding of sound functionality and UI interaction</li>
                                    <li>Allows users to play almost a full two octaves of the saxophone</li>
                                    <li>Worked remotely with a partner using Github, Zoom, and the Google Suite to collaborate</li>
                                </ul>
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
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </Stack>
            </div>
        </div>
    )
}

export default Projects;