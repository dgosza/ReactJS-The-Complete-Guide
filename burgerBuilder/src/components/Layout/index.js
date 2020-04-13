import React from 'react';

//HOC
import Aux from '../../hoc/Auxiliar'
//CSS
import './index.css'

const Layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawe, Backdrop</div>

        <main className="content">
            {props.children}
        </main>
    </Aux>
)

export default Layout;