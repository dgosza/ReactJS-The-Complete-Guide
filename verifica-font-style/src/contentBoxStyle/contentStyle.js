import React from 'react';
import Grid from '@material-ui/core/Grid'

const ContainerStyle = (props) => {

    return (

        <Grid item xs={4} align="center">
            <h1 >{props.fontName}</h1>
            <span className={props.font}>{props.text}</span>
        </Grid>

    )
}

export default ContainerStyle;