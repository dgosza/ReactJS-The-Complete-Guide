import React from 'react';
// import Charcomponent from './CharComponent';

const ValidationComponent = (props) => {

    
    if (props.length <= 5) {
        var text = 'Text too short'
    } else {
        var text = 'Text long enough'
    }
    
    return (
        <>
            {props.length}
            <p>{text}</p>

        </>
    );
}

export default ValidationComponent;
