/** @jsxImportSource @emotion/react */
import { Toolbar, Typography, AppBar, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react"
import DownloadIcon from '@mui/icons-material/Download';

function Nav() {

    const navigate = useNavigate();

    const linkStyle = css({
        textTransform: 'none',
        margin: '10px',
        backgroundColor: '#25733a',
        '&:hover':{
            backgroundColor: '#49a362'
        }
    })
    const barStyle = css({backgroundColor: '#205e31'})

    return (
        <AppBar position = "fixed" css={barStyle}>
            <Toolbar>
                <Typography variant = "h4" fontFamily="serif">
                    Jonah Ableman
                </Typography>
                <div css={css({
                    marginLeft: 'auto',
                    display: "flex",
                })}>
                    <Button variant = "contained" css={linkStyle} onClick={() => navigate('/')}>
                        About
                    </Button>
                    <Button variant = "contained" css={linkStyle} onClick={() => navigate('/projects')}>
                        Projects
                    </Button>
                    <Button variant = "contained" css={linkStyle} href="https://github.com/Jableman19" target="_blank">
                        Github
                    </Button>
                    <Button variant = "contained" css={linkStyle} href="./files" download={"Jonah Resume.pdf"}>
                        Resume <DownloadIcon/>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;