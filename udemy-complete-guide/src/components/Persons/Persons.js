import React from 'react';
import Person from './Person/Person'
import PropTypes from 'prop-types'

class Persons extends React.Component {

    constructor(props){
        super(props)
        // this.inputElement = React.createRef()

    }

    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps ')
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate ')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshopBeforeUpdate')

    }

    componentDidUpdate(){
        console.log('[Persons.js] componentDidUpdate')
    }

    componentDidMount(){
        // this.inputElement.focus()
        // this.inputElement.current.focus()
    }

    render() {
        console.log('[Persons.js] rendering...')
        return (
            this.props.persons.map((eachPerson, index) => {
                return <Person
                    name={eachPerson.name}
                    age={eachPerson.age}
                    click={() => this.props.clicked(index)}
                    // ref={ this.inputElement}
                    key={eachPerson.id}
                    changed={(event) => this.props.changed(event, eachPerson.id)} />
            })
        )
    }

}


Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    //PROPS Types: É usado para especificar o tipo de props recebido, tais como: string, number, functions.
    //npm install --save prop-types
}

export default Persons;