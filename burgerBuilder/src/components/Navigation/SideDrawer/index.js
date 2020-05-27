import React from 'react';
import './style.css'

import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'

const SideDrawer = (props) => {

    return (
        <div className="SideDrawer">
            <Logo/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer