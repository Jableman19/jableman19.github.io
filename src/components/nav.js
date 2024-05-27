/** @jsxImportSource @emotion/react */
import { Toolbar, Typography, AppBar, Button, IconButton, List, ListItem, ListItemText, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react"
import DownloadIcon from '@mui/icons-material/Download';
import AblemanJonahResume from '../files/AblemanJonahResume.pdf';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

function Nav() {

    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const linkStyle = css({
        textTransform: 'none',
        margin: '10px',
        backgroundColor: '#25733a',
        '&:hover':{
            backgroundColor: '#49a362'
        },
    })
    const barStyle = css({backgroundColor: '#205e31'})

    const drawerStyle = css({
        marginRight: '20px',
        //only visible on mobile
        '@media (min-width: 780px)': {
            display: 'none',
        },
    })

    const buttonNav = css({
        marginLeft: 'auto',
        //only visible on desktop
        '@media (max-width: 780px)': {
            display: 'none',
        },
    })

    
    const drawer = (
        <div>
            <List>
                {['About', 'Projects', 'Blog', 'Contact', 'LinkedIn', 'Github', 'Resume'].map((text, index) => (
                    <ListItem button key={text} onClick={() => handleNavItemClick(text)}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const handleNavItemClick = (text) => {
        switch (text) {
            case 'About':
                navigate('/');
                break;
            case 'Projects':
                navigate('/projects');
                break;
            case 'Blog':
                navigate('/blogs');
                break;
            case 'Contact':
                window.open("mailto:jableman@umich.edu");
                break;
            case 'LinkedIn':
                window.open("https://www.linkedin.com/in/jonah-ableman/", "_blank");
                break;
            case 'Github':
                window.open("https://github.com/Jableman19", "_blank");
                break;
            case 'Resume':
                window.open(AblemanJonahResume, "_blank");
                break;
            default:
                break;
        }
        setMobileOpen(false);
    };

    return (
        <AppBar position="fixed" css={barStyle}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    css={drawerStyle}
                >
                    < MenuIcon/>
                </IconButton>
                <Typography variant="p" fontSize={"30px"} className="title">
                    Jonah Ableman
                </Typography>
                <div css={buttonNav}>
                    <Button variant = "contained" css={linkStyle} onClick={() => navigate('/')}>
                        About
                    </Button>
                    <Button variant = "contained" css={linkStyle} onClick={() => navigate('/projects')}>
                        Projects
                    </Button>
                    <Button variant = "contained" css={linkStyle} onClick={() => navigate('/blogs')}>
                        Blog
                    </Button>
                    <Button variant = "contained" css={linkStyle} onClick={() => window.open("mailto:jableman@umich.edu")}>
                        Contact
                    </Button>
                    <Button variant = "contained" css={linkStyle} href="https://www.linkedin.com/in/jonah-ableman/" target="_blank">
                        LinkedIn
                    </Button>
                    <Button variant = "contained" css={linkStyle} href="https://github.com/Jableman19" target="_blank">
                        Github
                    </Button>
                    <Button variant = "contained" css={linkStyle} href={AblemanJonahResume} download={"JonahResume.pdf"}>    
                        Resume <DownloadIcon/>
                    </Button>
                </div>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    css={css({ width: 250 })}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}

export default Nav;