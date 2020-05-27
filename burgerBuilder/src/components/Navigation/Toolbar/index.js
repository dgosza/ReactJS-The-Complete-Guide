import React from 'react';
import './style.css'

import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'

const Toolbar = (props) => {

    return (
        <header className="Toolbar">
            <div>Menu</div>
            <Logo />
            <NavigationItems/>

        </header>
    )

}

export default Toolbar