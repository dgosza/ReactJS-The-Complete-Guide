import React from 'react';
import './style.css'

const Button = (props) => {

    const NameClass = 'Button ' + props.btnType
    
    return (
        <button onClick={props.clicked} className={NameClass} > {props.children} </button>

    )
}

export default Button;