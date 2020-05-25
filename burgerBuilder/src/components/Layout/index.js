import React from 'react';
import './index.css'

//HOC
import Aux from '../../hoc/Auxiliar'

import Toolbar from '../Navigation/Toolbar'

const Layout = (props) => (
    <Aux>
        <Toolbar  />

        <main className="content">
            {props.children}
        </main>
    </Aux>
)

export default Layout;