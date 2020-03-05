import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <input className="inputUser" type="text" onChange={props.changeName} value={props.actualValue}></input>
    )
}

export default UserInput;