import React from 'react';
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Typography from "@material-ui/core/Typography"
import Toolbar from '@material-ui/core/Toolbar'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import './Header.css';

const Header = () => {

    return (
        <AppBar position="static" id="appbar">
            <Container maxWidth="xl">
                <Grid>
                    <Toolbar>
                        <CardMedia
                            component="img"
                            id="imgLogo"
                            image="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png"
                        />

                        <Link href="#" color="inherit" underline="none">
                            LinkA
                        </Link>
                        <Link href="#" color="inherit" underline="none">
                            LinkA
                        </Link>

                    </Toolbar>
                </Grid>
            </Container>
        </AppBar>
    );
}

export default Header;