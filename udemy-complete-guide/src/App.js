import React, { useState } from 'react';
import Person from './Person/Person.js';
import Button from '@material-ui/core/Button';

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

   const nameChangedHandler = (event) => {
      setPersonsState({
         persons: [
            { name: 'Maxxxxx', age: 999 },
            { name: event.target.value, age: 122 },
            { name: 'Souza Magalhaes', age: 12 }
         ],
         otherState: personsState.otherState,
      })
   }

   const deletePersonHandler = (personIndex) =>{
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


   const style = {
      button: {
         backgroundColor: 'blue',
         font: 'inherit',
         borderColor: '1px solid blue',
         padding: '8px',
         cursor: 'pointer'
      }
   }

   const togglePersonsHandler = () => {
      const doesShow = show.showPersons;
      setShow({ showPersons: !doesShow })
   }

   let personsP = null


   if (show.showPersons) {
      personsP = (
         <div >
            {personsState.persons.map( (eachPerson, index) =>{
               return <Person 
               name={eachPerson.name}  
               age={eachPerson.age} 
               click={() => deletePersonHandler(index)}
               key={index} />
            } )}
            <Person name={counter.counter}></Person>
         </div>
      );
   }

   return (
      <div className="App">
         <h1>React App</h1>
         <h1>learning</h1>

         <button style={style.button} >Normal button without material component</button>

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
