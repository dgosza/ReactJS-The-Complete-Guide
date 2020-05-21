import React from 'react';
import './style.css'

import BuildControl from './BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
    <div className="buildControls">
        <p>Current Price: $<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(eachControl => (
            <BuildControl
                key={eachControl.label}
                label={eachControl.label}
                added={() => props.ingredientAdded(eachControl.type)}
                removed={() => props.ingredientRemoved(eachControl.type)}
                disabled={props.disabled[eachControl.type]}
            />
        ))}
        <button className="OrderButton" disabled={!props.purchaseable} onClick={props.ordered} >ORDER NOW</button>
    </div>
)

export default BuildControls