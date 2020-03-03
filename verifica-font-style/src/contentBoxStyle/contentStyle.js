import React from 'react';



const ContainerStyle = (props) =>{
    return(
        <div className="col s12 l4">
            <p className="flow-text fontName"><small>{props.fontName}</small></p>
            <p className="flow-text textFont"><small>{props.text}</small></p>
        </div>
    )
}

export default ContainerStyle;