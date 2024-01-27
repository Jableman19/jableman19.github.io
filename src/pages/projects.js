/** @jsxImportSource @emotion/react */
import { Typography, Card, Divider, Accordion, AccordionSummary, AccordionDetails, Stack} from "@mui/material";
import { css } from "@emotion/react";import React from "react";
import projectsData  from "../data/projectsData.json";

function Projects() {

    const images = {
        'hackhex': require('../files/hackhex.png'),
        'twinheart': require('../files/twinheart.png'),
        'zelda': require('../files/Unity_6H51gRZSgD.png'),
        'burtbee': require('../files/burtbee.jpg'),
        'CAD': require('../files/CAD.png'),
        'crochet1': require('../files/Mushroom.jpg'),
        'crochet2': require('../files/Psyduck.jpg'),
        'crochet3': require('../files/Oshawott.jpg'),
        'crochet4': require('../files/Crochet3.jpg'),
        'crochet5': require('../files/Crochet4.jpg'),
        'engine': require('../files/Engine.gif'),
        'flipbook': require('../files/sk8bort.gif'),
        'skate': require('../files/flipbook.gif'),
        'kingpin': require('../files/KingPin.gif'),
        'rug': require('../files/Rug.jpg'),
        'sax': require('../files/SaxSimScreenCap.png'),
        'sidekick': require('../files/Sidekick.png'),
        'RhythmVR': require('../files/RhythmVR.gif'),
        'rings': require('../files/Rings1.jpg'),
        'isaac': require('../files/isaac.gif'),
        'pokefy': require('../files/pokefy.gif'),
    };

    //Styles
    const gridCont = css({
        display: 'grid',
        gridTemplateColumns: '33.3% 33.3% 33.3%',
        marginTop: '30px',
        marginLeft: '75px', 
        marginRight: '75px',
        //for mobile
        '@media (max-width: 768px)': {
            gridTemplateColumns: '100%',
            marginLeft: '10px', 
            marginRight: '10px',
        },
    })

    const gridItem = css({
        marginLeft: '5px', 
        marginRight: '5px',
    })

    const pImage = css({
        width: 'auto',
        display: 'block',
        margin: 'auto',
        borderRadius: "30px", 
        marginBottom: "20px"
    })

    const imageStyle = css({
        width: 'auto',
        display: 'block', 
        margin: 'auto',
    })

    const cardStyle = css({
        marginBottom: '10px',
        background: '#f2eeed',
        '&:hover':{
            boxShadow: "5px 5px #49a362"
        },
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

    //Helper function to render description items
    const renderDescItem = (desc) => {
        if(desc.type === "text"){
            return <Typography>{desc.content}</Typography>
        }
        else if(desc.type === "image"){
            return <img height={"315px"} src={`${images[desc.content]}`} alt = {desc.alt} css={pImage}></img>
        }
        else if(desc.type === "link"){
            return <a target="_blank" href={desc.link}>{desc.content}</a>
        }
    }

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
            {/* Typography and Divider remain the same */}
            <div css={gridCont}>
                {projectsData.map(projectList => (
                    <Stack css={gridItem}>
                        {projectList.projects.map(project => (
                            <Card onMouseLeave={() => {handleChange("");}} onMouseOver={() => handleChange(project.id)} css = {cardStyle}>
                                {project.videoSrc ? (
                                    <iframe height="315" width="100%" src={project.videoSrc} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                                ) : (
                                    <img height={"315px"} src={`${images[project.imageSrc]}`} alt={project.title} css={imageStyle}></img>
                                )}
                                <Accordion expanded={expanded === project.id}>
                                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                        <Typography css={accTitle}>{project.title}</Typography>
                                        <Typography css={accDate}>{project?.date}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails css={accStyle}>
                                        <Typography>
                                            {project.description.map((desc, index) => (
                                                <React.Fragment key={index}>
                                                    {renderDescItem(desc)}
                                                </React.Fragment>
                                            ))}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Card>
                        ))}
                    </Stack>
                ))}
            </div>
        </div>
    )
}

export default Projects;