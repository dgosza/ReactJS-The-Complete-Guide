import React from 'react';
import './style.css'

const BuildControl = (props) => (
    <div className="buildControl">
        <div className="labelName">{props.label}</div>
        <button className="Less" onClick={props.removed} disabled={props.disabled} >Less</button>
        <button className="More" onClick={props.added}>More</button>
    </div>
)

export default BuildControl;