/** @jsxImportSource @emotion/react */
import { Typography, Card, Divider } from "@mui/material";
import { css } from "@emotion/react"

function Home() {

    //Styles
    const gridCont = css({
        display: 'grid',
        gridTemplateColumns: '50% 1fr',
        gridTemplateRows: 'auto auto',
        marginTop: '60px'
    })

    const expGridC = css({
        display: 'grid',
        gridTemplateColumns: '30% 2% 1fr',
        gridTemplateRows: 'auto',
    })

    const aboutStyle = css({
        width: 'auto',
        margin: "20px",
        padding: "10px",
        backgroundColor: "#f2eeed",
        '&:hover':{
            boxShadow: "5px 5px #49a362"
        },
        '&:nth-of-type(3n+1)':{
            gridColumn: '1 / 3'
        },
        //mobile
        '@media (max-width: 768px)': {
            gridColumn: '1 / 3',
        }
    })

    const listStyle = css({
        fontSize: "14px",
        marginRight: "20px"
    })

    const imgStyle = css({
        float: "left",
        maxWidth: "250px",
        height: "auto",
        borderRadius: "30px",
        marginRight: "20px",
        marginLeft: "20px",
        marginBottom: "10px",
        //mobile
        '@media (max-width: 768px)': {
            width: "100%",
            height: "auto",
            float: "none",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
        }
    })

    const logoStyle = css({
        height: "50px",
        float: "right",
        marginLeft: 'auto',
        marginTop: '5px',
    })

    //Page
    return (
        <div css={gridCont}>
            {/* About Card */}
            <Card css = {aboutStyle}>
                <Typography variant="p" className="title" css={css({marginLeft: "35px", marginBottom: "5px", marginTop: "10px", fontSize: '30px', fontWeight: 'bold'})}>About Me</Typography>
                <Divider css={css({marginBottom: "20px"})} />
                <img src={require("../files/JonahPic.jpg")} alt="Jonah Profile" css={imgStyle}/>
                <Typography variant = "p" className="title" css={css({paddingRight: '50px', fontSize: '20px', fontWeight: "bold", lineHeight: 1.8})}>
                    Hello! My name is Jonah Ableman - thanks for visiting my site. I initially created this as a tool to help myself professionally.
                    Nowadays, it more just serves as a place for me to document what I'm up to creatively, professionally, and personally!
                    If you don't already know me, I'm going to be an SDE at Amazon in August, and when it comes to tech, I am extremely passionate about emergent technologies, especially those relating to extended reality initiatives. 
                    Personally, though, I'm many more things. I love music more than anything and I'm constantly going to concerts and playing guitar. I am pretty actively skateboarding and bouldering, and I've recently started taking hiking more seriously. When I'm not bullying my body I love to cozy up with a book or wind down playing videogames.
                    I'm always trying to push myself creatively and make fun projects of all kinds - feel free to take a look at my projects page or my blogs to see what I'm up to and feel free to reach out for any reason, I always love to chat.
                </Typography>
            </Card>
            {/* Experience Card */}
            <Card css = {aboutStyle}>
                <Typography variant="p"  className="title" css={css({textAlign: 'center', marginBottom: "5px", marginTop: "5px", fontSize:"25px", display: 'block'})}>Experience</Typography>
                <Divider css={css({marginBottom: "15px", gridRow: " 1 / 4"})} />
                <div css={expGridC}>
                    {/* Amazon*/}
                    <div css={css({marginRight: '10px'})}>
                        <Typography variant = "p1" css={css({display: 'block', textAlign: "right", fontWeight: 'bold'})}>Amazon</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>Software Developer Engineer Intern</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>May 2023 - August 2023</Typography>
                        <img src={require("../files/AMZN-e9f942e4.png")} alt="Amazon Logo" css={logoStyle}/>
                    </div>
                    <Divider orientation="vertical"/>
                    <ul  css={css({marginBottom: "15px"})}>
                        <li css = {listStyle}>Aiding in the development of a React Native application, serving 500,000+ daily users</li>
                        <li css = {listStyle}>Running experiments using A/B testing to optimize customer experience</li>
                        <li css = {listStyle}>Participating in agile methodology practices such as daily standups, code reviews, and extensive debugging in order to ensure a secure and structured environment</li>
                    </ul>
                    {/* Whisker*/}
                    <div css={css({marginRight: '10px'})}>
                        <Typography variant = "p1" css={css({display: 'block', textAlign: "right", fontWeight: 'bold'})}>Whisker</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>Software Engineer Intern</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>May 2022 - August 2022</Typography>
                        <img src={require("../files/Whisker.png")} alt="Whisker Logo" css={logoStyle}/>
                    </div>
                    <Divider orientation="vertical"/>
                    <ul  css={css({marginBottom: "15px"})}>
                        <li css = {listStyle}>Contributed to a full stack internal diagnostic tool using Typescript and React, decreasing customer support times by over 50% and saving the company over $20,000 a year on external software </li>
                        <li css = {listStyle}>Handled and developed backend interactions with AWS for a network of over 500,000 devices, improving application efficiency and consumer experience</li>
                        <li css = {listStyle}>Led development of a new feature from start to finish including design, documentation, and development</li>
                        <li css = {listStyle}>Converted project codebase to use AWS CDK in order to utilize infrastructure as code and improve efficiency</li>
                        <li css = {listStyle}>Assisted in development of new project backend, creating REST API endpoints to be utilized by over 250,000 mobile devices</li>

                    </ul>
                </div>
            </Card>
            {/*Extracurricular Card */}
            <Card css = {aboutStyle}>
                <Typography variant="p"  className="title" css={css({textAlign: 'center', marginBottom: "5px", marginTop: "5px", fontSize:"25px", display: 'block'})}>Extracurriculars</Typography>
                <Divider css={css({marginBottom: "15px", gridRow: " 1 / 4"})} />
                {/*Shift*/}
                <div css={expGridC}>
                    <div css={css({marginRight: '10px'})}>
                        <Typography variant = "p1" css={css({display: 'block', textAlign: "right", fontWeight: 'bold'})}>Shift Creator Space</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>Core Team Lead</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>September 2021 - May 2024</Typography>
                        <img src={require("../files/shift.png")} alt="Shift Logo" css={logoStyle}/>
                    </div>
                    <Divider orientation="vertical"/>
                    <ul  css={css({marginBottom: "15px"})}>
                        <li css = {listStyle}>Facilitated weekly organizational meetings to plan for the future direction of the club and it’s members</li>
                        <li css = {listStyle}>Acted as a leader and facilitator for mass club meetings and as a mentor to members</li>
                        <li css = {listStyle}>Worked 10 hours a week on exciting projects within a community of highly impassioned creatives</li>
                        <li css = {listStyle}>Cultivated and grew new relationships with club sponsors, collaborators, and individuals such as club alumni</li>
                    </ul>
                    {/* Michigan Hackers */}
                    <div css={css({marginRight: '10px'})}>
                        <Typography variant = "p1" css={css({display: 'block', textAlign: "right", fontWeight: 'bold'})}>Michigan Hackers</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>Vice President {"[Marketing]"}</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>August 2020 - June 2022</Typography>
                        <img src={require("../files/hackhex.png")} alt="Michigan Hackers Logo" css={logoStyle}/>
                    </div>
                    <Divider orientation="vertical"/>
                    <ul>
                        <li css = {listStyle}>Co-Led weekly mass club meetings of over 100+ students</li>
                        <li css = {listStyle}>Hosted weekly meetings with core team in order to plan and discuss future club events</li>
                        <li css = {listStyle}>Coordinated, organized, and hosted special events for sponsors and club members alike</li>
                        <li css = {listStyle}>Managed social media accounts, created various marketing materials, and designed club merchandise</li>
                    </ul>
                </div>
            </Card>
            {/* Education Card */}
            <Card css = {aboutStyle}>
                <Typography variant="p"  className="title" css={css({textAlign: 'center', marginBottom: "5px", marginTop: "5px", fontSize:"25px", display: 'block'})}>Education</Typography>
                <Divider css={css({marginBottom: "15px", gridRow: " 1 / 4"})} />
                <div css={expGridC}>
                    {/* University of Michigan */}
                    <div css={css({marginRight: '10px'})}>
                        <Typography variant = "p1" css={css({display: 'block', textAlign: "right", fontWeight: 'bold'})}>University of Michigan</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>BSE Computer Science, Music Minor</Typography>
                        <Typography variant = "p2" css={css({display: 'block', fontSize: "12px", textAlign: 'right' })}>August 2020 - May 2024</Typography>
                        <img src={require("../files/umich.png")} alt="University of Michigan Logo" css={[logoStyle, css({marginBottom: '5px'})]}/>
                    </div>
                    <Divider orientation="vertical"/>
                    <ul  css={css({marginBottom: "15px"})}>
                        <li css = {listStyle}>Relevant Coursework: Data Structures, Algorithms, Computer Vision, XR and Society, Game Development,<br></br>Game Engine Architecture, Discrete Math, Foundations of Computer Science, Computer Organization, Linear Algebra</li>
                        <li css = {listStyle}>Skills:  C++, Python, React, React Native, C#, UNIX,  Typescript, AWS,  Git, HTML, CSS, VS Code, Unreal Engine, Unity, Arduino</li>
                    </ul>
                </div>
            </Card>
        </div>
    )
}

export default Home;