import React, { useEffect, useRef } from 'react'
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

    const toggleBtnRef = useRef(null)


    useEffect(() => {
        console.log('cockpit js use Effect')

        toggleBtnRef.current.click();


        return () => {
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

            <Button ref={toggleBtnRef} variant="contained" color="secondary" onClick={props.clickHandlePerson}>
                Toggle Persons
            </Button>
        </Aux>

    )
}

export default React.memo(Cockpit);