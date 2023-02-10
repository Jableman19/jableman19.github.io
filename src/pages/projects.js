/** @jsxImportSource @emotion/react */
import { Typography, Card, Divider, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import { css } from "@emotion/react";import React from "react";
import { useNavigate } from "react-router-dom";

function Projects() {

    const gridCont = css({
        display: 'grid',
        gridTemplateColumns: '33.3% 33.3% 33.3%',
        //gridTemplateRows: 'auto auto',
        marginTop: '60px',
        marginLeft: '75px', 
        marginRight: '75px',
    })

    const gridItem = css({
        marginLeft: '5px', 
        marginRight: '5px',
        marginBottom: '10px',
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

    const [expanded, setExpanded] = React.useState(" ");

    const handleChange = (panel) => {
        setExpanded(panel);
    };

    const navigate = useNavigate();
    return (
        <div>
            <Typography variant = "h4" css={css({marginTop: "75px", marginBottom: "5px", textAlign: "center"})}>
                Projects
            </Typography>
            <Divider css={css({marginLeft: '100px', marginRight: '100px'})}/>
            <div css={gridCont}>
                <div css={gridItem} onClick={() => navigate('/')}>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("BBB")}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Vl-r5Yk-pVo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <Accordion expanded={expanded === "BBB"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css={accTitle}>BBB Lab Simulator VR</Typography>
                                <Typography css={accDate}>January 2023- February 2023</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>Spent 3 weeks faithfully recreating a physical space in VR using Unreal Engine 5</li>
                                    <li>Created reusable components and an affordance system taking advantage of polymorphism  to allow for quick development</li>
                                    <li>Worked 15 hours a week in coordination with a partner, using github for version control</li>
                                    <li>Designed and implemented Pokemon minigame in one week</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </div>
                <div css={gridItem}>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("SS")}>
                    <iframe display='block' width="560" height="315" src="https://www.youtube.com/embed/c-45ivGvhIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                        <Accordion expanded={expanded === "SS"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Stutter Speak VR</Typography>
                                <Typography css={accDate}>May 2021- August 2021</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>Built VR Application focused on assisting people who stutter with public speaking in Unreal Engine 4 with object oriented code practices, using C++ and Blueprint. Launched on the official Oculus store in August 2021</li>
                                    <li>Devoted 40 hours per week to various aspects of development such as coding, design, testing, and coordinating with others</li>
                                    <li>Collaborated with medical professional and speech pathologist, Tricia Krauss-Lehrman, on a bi-weekly basis to help shape the vision for the application</li>
                                    <li>Created various systems to save and display user data, track progress over time and provide feedback, read in custom user files, and handle physics interactions</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </div>
                <div css={gridItem}>
                    <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange("SAX")}>
                        <img height={"315px"} src={require('../files/SaxSimScreenCap.png')} alt = "Saxo Sim Game Screen" css={css({width: 'auto'})}></img>
                        <Accordion expanded={expanded === "SAX"}>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography css = {accTitle}>Saxophone Simulator</Typography>
                                <Typography css={accDate}>April 2021</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>Made in one week using Unity Engine and C#</li>
                                    <li>Recorded and mixed all the sound, handled coding of sound functionality and UI interaction</li>
                                    <li>Allows users to play almost a full two octaves of the saxophone</li>
                                    <li>Worked remotely with a partner using Github, Zoom, and the Google Suite to collaborate</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Projects;