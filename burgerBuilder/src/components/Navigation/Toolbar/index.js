import React from 'react';
import './style.css'

import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle'

const Toolbar = (props) => {

    return (
        <header className="Toolbar">
            <DrawerToggle clicked={props.drawerToggleClicked} />

            <div className="LogoItemTol">
                <Logo />
            </div>

            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>

        </header>
    )

}

export default Toolbar