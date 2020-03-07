import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
const App = () => {

   // const styles = styles{
   //    backgroundColor: 'blue'
   // }

   return (


      <Container>
         <Grid container spacing={3}>
            <Grid item xs={12} md={12} ><Paper elevation={3}> xs 12</Paper></Grid>
            <Grid item xs={6}><Paper elevation={3}> xs 6</Paper></Grid>
            <Grid item xs={6}><Paper elevation={3}> xs 6</Paper></Grid>

            <Grid item xs={3}><Paper elevation={3}> xs 3</Paper></Grid>
            <Grid item xs={3}><Paper elevation={3}> xs 3</Paper></Grid>
            <Grid item xs={3}><Paper elevation={3}> xs 3</Paper></Grid>
            <Grid item xs={3}><Paper elevation={3}> xs 3</Paper></Grid>

            <Grid item xs={2}><Paper elevation={3}> xs 2</Paper></Grid>
            <Grid item xs={2}><Paper elevation={3}> xs 2</Paper></Grid>
            <Grid item xs={2}><Paper elevation={3}> xs 2</Paper></Grid>
            <Grid item xs={2}><Paper elevation={3}> xs 2</Paper></Grid>
            <Grid item xs={2}><Paper elevation={3}> xs 2</Paper></Grid>
            <Grid item xs={2}><Paper elevation={3}> xs 2</Paper></Grid>
            
         </Grid>
      </Container>

   );
}

export default App;
