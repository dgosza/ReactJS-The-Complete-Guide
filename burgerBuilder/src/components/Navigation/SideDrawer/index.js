import React from 'react';
import './style.css'

import Logo from '../../Logo'
import NavigationItems from '../NavigationItems'
import BackDrop from '../../UI/Backdrop'
import Aux from '../../../hoc/Auxiliar'

const SideDrawer = (props) => {

    var attachedClasses = ['SideDrawer', 'Close']

    if(props.open){
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}  />
            <div className={attachedClasses.join(' ')} >
                <div className="LogoItem">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer