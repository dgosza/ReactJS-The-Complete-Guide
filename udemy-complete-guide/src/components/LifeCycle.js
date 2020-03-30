import React from 'react';

class Lifecycle extends React.Component {

    constructor(props) {
        super(props);
        console.log('Entrando no constructor')
        this.state = {

        }
    }

    static getDerivedStateFromPros(props, state) {

        console.log('getDerivedStateFromProps')
        return state
    }

    componentDidMount(){
        console.log('component did mount.')
    }


    render(){
        console.log('render')

        return (
            
            <h1>a</h1>
            
        )
    }
    

}

export default Lifecycle;