import React, { useState} from 'react';
// import Charcomponent from './CharComponent';

const ValidationComponent = (props) => {
    // var textReceived = props.text;
    // var textArray = textReceived.split("")    
    
    // const handleCharComponent = (eachLetter, index) =>{
    //     console.log(eachLetter.value)
    //     const copyTextArray = [...textArray];
    //     copyTextArray.splice(index, 1)
        
    //     textArray = copyTextArray
    //     console.log(textArray)

    // }
    
    if (props.length <= 5) {
        var text = 'Text too short'
    } else {
        var text = 'Text long enough'
    }

    
    return (
        <>
            {props.length}
            <p>{text}</p>
{/* 
            {textArray.map( (eachLetter, index) => {
                return <Charcomponent text={eachLetter} key={index} array={textArray} click={(event) => handleCharComponent(eachLetter, index)} ></Charcomponent>
            } )} */}
        </>
    );
}

export default ValidationComponent;
