import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Aux from '../hoc/Auxiliar';

const ButtonStyled = styled.a`
    background-color: ${props => props.alteracao ? 'red' : 'black'};
    color: white;
    font: inherit;
    border-color: 1px solid blue;
    padding: 8px;
    cursor: pointer;
`

const Cockpit = (props) => {

    useEffect(() => {
        console.log('cockpit js use Effect')

        const timer = setTimeout(() => {
            alert('saved data to cloud!');
        }, 1000);

        return () => {
            clearTimeout(timer);
            console.log('rockpit unmount')
        }
    }, [])

    let classes = [];

    if (props.person.length <= 2) {
        classes.push('redd');
    }

    if (props.person.length <= 1) {
        classes.push('bold')
    }

    return (
        <Aux>
            <h1>React App</h1>
            <p className={classes.join(' ')}>learning</p>
            <p> {props.title} </p>
            <ButtonStyled alteracao={props.showPerson} >Normal button without material component</ButtonStyled>

            <Button variant="contained" color="secondary" onClick={props.clickHandlePerson}>
                Toggle Persons
            </Button>
        </Aux>

    )
}

export default React.memo(Cockpit);