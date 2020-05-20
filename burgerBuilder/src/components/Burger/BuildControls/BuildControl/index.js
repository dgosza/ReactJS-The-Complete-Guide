import React from 'react';
import './style.css'

const BuildControl = (props) => (
    <div className="buildControl">
        <div className="labelName">{props.label}</div>
        <button className="Less">Less</button>
        <button className="More">More</button>
    </div>
)

export default BuildControl;