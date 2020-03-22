import React from 'react';
import Person from './Person/Person'

class Persons extends React.Component {

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


    render() {
        console.log('[Persons.js] rendering...')
        return (
            this.props.persons.map((eachPerson, index) => {
                return <Person
                    name={eachPerson.name}
                    age={eachPerson.age}
                    click={() => this.props.clicked(index)}
                    key={eachPerson.id}
                    changed={(event) => this.props.changed(event, eachPerson.id)} />
            })
        )
    }

}


export default Persons;