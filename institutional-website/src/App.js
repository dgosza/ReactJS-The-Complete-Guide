import React from 'react';
import './App.css';
import { Container, Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import { TiArrowMaximiseOutline } from "react-icons/ti";

const App = () => {
    return (

        <>


            <Grid container spacing={3} direction="column" alignItems="center">

                <Grid item xs={12}>
                    <TextField variant="outlined" label="Login"></TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField variant="outlined" label="Senha"></TextField>
                </Grid>

                <Grid item xs={12} justify="space-between">

                    <Grid item>
                        <Typography variant="body2" gutterBottom>Trouble with login?</Typography>
                    </Grid>

                    <Grid item>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="medium"
                            endIcon={<TiArrowMaximiseOutline size={20} />}
                        >Login</Button>
                    </Grid>
                </Grid>

            </Grid>


        </>

    );
}

export default App;

