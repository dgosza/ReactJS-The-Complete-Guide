import React from 'react';

class Lifecycle extends React.Component {

    constructor(props) {
        super(props);
        console.log('Entrando no constructor')
        this.state = {

        }
    }

    static getDerivedStateFromPros(props, state) {

        return state
        console.log('getDerivedStateFromProps')
    }

    render() {
        return (
            <p>oi</p>
        )
    }

}

export default Lifecycle;