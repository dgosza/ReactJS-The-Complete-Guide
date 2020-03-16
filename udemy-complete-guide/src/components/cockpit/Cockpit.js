import React from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ButtonStyled = styled.a `
    background-color: ${props => props.alteracao ? 'red' : 'black'};
    color: white;
    font: inherit;
    border-color: 1px solid blue;
    padding: 8px;
    cursor: pointer;
`

const Cockpit = (props) => {



    let classes = [];

    if (props.person.length <= 2) {
        classes.push('red');
    }

    if (props.person.length <= 1) {
        classes.push('bold')
    }


    return (
        <div>
            <h1>React App</h1>
            <p className={classes.join(' ')}>learning</p>

            <ButtonStyled alteracao={props.showPerson} >Normal button without material component</ButtonStyled>

            <Button variant="contained" color="secondary" onClick={props.clickHandlePerson}>
                Toggle Persons
            </Button>

        </div>
    )
}

export default Cockpit;