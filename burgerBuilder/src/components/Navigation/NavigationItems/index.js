import React from 'react';
import './style.css'

import NavigationItem from './NavigationItem'

const NavigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active={true} >Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)

export default NavigationItems