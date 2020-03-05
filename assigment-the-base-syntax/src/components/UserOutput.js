import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Paragraph one of Name: <strong>{props.name}</strong></p>
            <p>Paragraph two</p>
        </div>
    )
}

export default UserOutput;