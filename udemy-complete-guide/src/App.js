import React, { useState } from 'react';
import Person from './Person/Person.js';
import Button from '@material-ui/core/Button';
import './App.css';
import styled from 'styled-components'

const ButtonStyled = styled.button`
   background-color: ${props => props.alteracao ? 'red' : 'black'};
   color: white;
   font: inherit;
   border-color: 1px solid blue;
   padding: 8px;
   cursor: pointer;


`

const App = () => {

   const [personsState, setPersonsState] = useState({
      persons: [
         { id: 'das', name: 'Max', age: 23 },
         { id: '312', name: 'Manu', age: 29 },
         { id: '534', name: 'Ste', age: 30 }
      ],
      otherState: 'AnotherState'
   });

   const [show, setShow] = useState({
      showPersons: false
   })

   const nameChangedHandler = (event, id) => {

      //Retorna o Index de onde esta a pessoa de id tal.
      const personIndex = personsState.persons.findIndex(p => {
         return p.id === id;
      })
      console.log(personIndex)
      //Copia somente o index onde a pessoa esta localizada.
      const person = { ...personsState.persons[personIndex] }
      console.log(person)
      //Muda o valor de name para o nome digitado
      person.name = event.target.value;
      //Copia os valores de persons
      const persons = [...personsState.persons]
      persons[personIndex] = person;

      setPersonsState({
         persons: persons,
         otherState: personsState.otherState,
      })

   }

   const deletePersonHandler = (personIndex) => {
      //   const persons = personsState.persons;
      const persons = [...personsState.persons]
      persons.splice(personIndex, 1);
      setPersonsState({
         persons: persons
      })

   }

   const [counter, setCounter] = useState({ counter: 0 })
   const addCounter = () => {
      setCounter({
         counter: counter.counter + 1
      })
   }

   const togglePersonsHandler = () => {
      const doesShow = show.showPersons;
      setShow({ showPersons: !doesShow })
   }

   let personsP = null

   if (show.showPersons) {
      personsP = (
         <div >
            {personsState.persons.map((eachPerson, index) => {
               return <Person
                  name={eachPerson.name}
                  age={eachPerson.age}
                  click={() => deletePersonHandler(index)}
                  key={eachPerson.id}
                  changed={(event) => nameChangedHandler(event, eachPerson.id)} />
            })}
            <Person name={counter.counter}></Person>
         </div>
      );

      // style.button.backgroundColor = 'red';
      // style.button[':hover'] = {
      //    backgroundColor: 'purple',
      //    color: 'red'
      // }

   }

   let classes = [];

   if (personsState.persons.length <= 2) {
      classes.push('red');
   }

   if (personsState.persons.length <= 1) {
      classes.push('bold')
   }

   console.log(classes)

   return (

      <div className="App">
         <h1>React App</h1>
         <p className={classes.join(' ')}>learning</p>

         <ButtonStyled alteracao={show.showPersons} >Normal button without material component</ButtonStyled>

         <Button variant="contained" color="secondary" onClick={togglePersonsHandler}>
            Toggle Persons
         </Button>

         <Button variant="contained" color="secondary" onClick={addCounter}>
            click here to change the counter value, ++1
         </Button>

         {
            personsP ? personsP : null
         }

      </div>

   )

}

export default App;
