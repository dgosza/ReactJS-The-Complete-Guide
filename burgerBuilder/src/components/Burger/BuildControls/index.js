import React from 'react';
import './style.css'

import BuildControl from './BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => (
    <div className="buildControls">
        {controls.map(eachControl => (
            <BuildControl key={eachControl.label} label={eachControl.label}/>
        ))}
    </div>
)

export default BuildControls