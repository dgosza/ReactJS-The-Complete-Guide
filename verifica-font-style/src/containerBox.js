import React, { useState } from 'react';
import ContainerStyle from './contentBoxStyle/contentStyle'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'


const ContainerBox = () => {

    const [fontText, setFontText] = useState([
        {
            fontName: 'Roboto',
            text: 'Texto da Fonte Selecionada',
            font: 'roboto'
        },
        {
            fontName: 'Spartan',
            text: 'Texto da Fonte Selecionada',
            font: 'spartan'
        },
        {
            fontName: 'Oxanium',
            text: 'Texto da Fonte Selecionada',
            font: 'oxanium'
        },
        {
            fontName: 'Odibee Sans',
            text: 'Texto da Fonte Selecionada',
            font: 'odibee'
        },
        {
            fontName: 'Pacifico',
            text: 'Texto da Fonte Selecionada',
            font: 'pacifico'
        },

    ])

    const changeText = (event) => {
        setFontText(
            [
                {
                    fontName: fontText[0].fontName,
                    text: event.target.value,
                    font: fontText[0].font
                },
                {
                    fontName: fontText[1].fontName,
                    text: event.target.value,
                    font: fontText[1].font
                },
                {
                    fontName: fontText[2].fontName,
                    text: event.target.value,
                    font: fontText[2].font
                },
                {
                    fontName: fontText[3].fontName,
                    text: event.target.value,
                    font: fontText[3].font
                },
                {
                    fontName: fontText[4].fontName,
                    text: event.target.value,
                    font: fontText[4].font
                },
            ]
        )
    }

    return (

        <Grid container>
            <Grid item xs={12}>
                <form align="center">
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={changeText} />
                </form>
            </Grid>

            <ContainerStyle fontName={fontText[0].fontName} text={fontText[0].text} font={fontText[0].font} />
            <ContainerStyle fontName={fontText[1].fontName} text={fontText[1].text} font={fontText[1].font}/>
            <ContainerStyle fontName={fontText[2].fontName} text={fontText[2].text} font={fontText[2].font}/>
            <ContainerStyle fontName={fontText[3].fontName} text={fontText[3].text} font={fontText[3].font}/>
            <ContainerStyle fontName={fontText[4].fontName} text={fontText[4].text} font={fontText[4].font}/>
        </Grid>
    );
}

export default ContainerBox;