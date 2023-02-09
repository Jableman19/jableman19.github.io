/** @jsxImportSource @emotion/react */
import { Typography, Card } from "@mui/material";
import { css } from "@emotion/react"

function Home() {

    const gridCont = css({
        display: 'grid',
        gridTemplateColumns: '60% 1fr',
    })

    const firstStyle = css({
        width: 'auto',
        margin: "20px",
        padding: "10px",
        backgroundColor: "#f2eeed",
        gridRow: '1 / 3' 
    })

    const aboutStyle = css({
        width: 'auto',
        margin: "20px",
        padding: "10px",
        backgroundColor: "#f2eeed",
    })

    const imgStyle = css({
        float: "left",
        maxWidth: "250px",
        height: "auto",
        borderRadius: "30px",
        marginRight: "10px"
    })
    return (
        <div css={gridCont}>
            <Card css = {firstStyle}>
                <Typography variant="h5" css={css({marginLeft: "20px", marginBottom: "5px"})}>About Me</Typography>
                <img src={require("../files/JonahPic.jpg")} alt="Jonah Profile" css={imgStyle}/>
                <Typography>
                    My name is Jonah Ableman and I am a Junior studying computer science at the University of Michigan.
                    I have a lot of experience w blah blah blah
                </Typography>
            </Card>
            <Card css = {aboutStyle}>
                Experience
            </Card>
            <Card css = {aboutStyle}>
                Extracurriculars
            </Card>
        </div>
        
    )
}

export default Home;