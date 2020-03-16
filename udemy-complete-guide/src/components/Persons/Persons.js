import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
    return(
        props.persons.map((eachPerson, index) => {
            return <Person
                name={eachPerson.name}
                age={eachPerson.age}
                click={() => props.clicked(index)}
                key={eachPerson.id}
                changed={(event) => props.changed(event, eachPerson.id)} />
        })
    )
}


export default Persons;