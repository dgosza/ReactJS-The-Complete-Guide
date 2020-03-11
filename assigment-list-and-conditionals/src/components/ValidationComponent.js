import React from 'react';
import Charcomponent from './CharComponent';

const ValidationComponent = (props) => {

    const handleCharComponent = (letter, index) =>{
        console.log(textArray[index])
    }
    
    const textReceived = props.text;
    const textArray = textReceived.split("")    

    if (props.length <= 5) {
        var text = 'Text too short'
    } else {
        var text = 'Text long enough'
    }

    
    return (
        <>
            {props.length}
            <p>{text}</p>

            {textArray.map( (eachLetter, index) => {
                return <Charcomponent text={eachLetter} key={index} array={textArray} click={(event) => handleCharComponent(eachLetter, index)} ></Charcomponent>
            } )}
        </>
    );
}

export default ValidationComponent;
