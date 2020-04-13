import React from 'react';

//HOC
import Aux from '../../hoc/Auxiliar'


class BugerBuilder extends React.Component {
    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BugerBuilder