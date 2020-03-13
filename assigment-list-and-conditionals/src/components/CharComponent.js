import React from 'react';
import './CharComponent.css'

const CharComponent = (props) => {

    return (
        <p id="CharComponent" onClick={props.click}>
            {props.text}
            
        </p>
    );
}

export default CharComponent;