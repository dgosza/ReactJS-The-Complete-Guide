import React from 'react';
import './style.css'

//HOC
import Aux from '../../hoc/Auxiliar'

import Toolbar from '../Navigation/Toolbar'
import SideDrawer from '../Navigation/SideDrawer'

const Layout = (props) => (
    <Aux>
        <Toolbar  />
        <SideDrawer/>
        <main className="content">
            {props.children}
        </main>
    </Aux>
)

export default Layout;