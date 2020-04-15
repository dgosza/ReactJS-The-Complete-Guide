import React from 'react';

//HOC
import Aux from '../../hoc/Auxiliar'

//Components
import Burger from '../../components/Burger'

class BugerBuilder extends React.Component {

    constructor(props) {
        super(props)

    }

    state = {
        ingredients:{
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BugerBuilder