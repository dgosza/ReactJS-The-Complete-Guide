import React from 'react';
import './CharComponent.css'

const CharComponent = (props) => {

    const handleCharComponent = (text) => {
        console.log(text)
        console.log(props.array)
    }

    return (
        <p id="CharComponent" onClick={props.click}>
            {props.text}
            
        </p>
    );
}

export default CharComponent;