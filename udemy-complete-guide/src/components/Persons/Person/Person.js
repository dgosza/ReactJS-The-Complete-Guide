import React from 'react';
import './Person.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 1px solid black;
    box-shadow: 5px 5px 10px rgb(4, 86, 161);
    margin:10px auto;
    width:400px;
    height: 130px;
    text-align: center;
  
    @media (min-width: 500px){
        width: 500px;         
    }

`

const StyleP = styled.p`
    font-size:23px;
`

const Person = (props) => {

    return (

        <StyledDiv>
            <StyleP>< p onClick={props.click} > I'm {props.name} and I'm {props.age} years old!!</p></StyleP>
            < p > {props.children}</p >
            <p>{props.counter}</p>
            <input type="text" onChange={props.changed} />
        </StyledDiv>

    )
};

export default Person;