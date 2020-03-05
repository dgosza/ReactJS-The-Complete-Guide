import React, { useState } from 'react';
import Person from './Person/Person.js';
import Button from '@material-ui/core/Button';

const App = () => {

   const [personsState, setPersonsState] = useState({
      persons: [
         { name: 'Max', age: 23 },
         { name: 'Manu', age: 29 },
         { name: 'Ste', age: 30 }
      ],
      otherState: 'AnotherState'
   });

   const switchNameHandler = (newName) => {
      // console.log('entrei no button hehe')
      //DONT DO THIS: personsState.persons[0].name = 'Diego Fulano de Tal'
      setPersonsState({
         persons: [
            { name: newName, age: 999 },
            { name: 'de Souza', age: 122 },
            { name: 'Magalhaes', age: 12 }
         ],
         otherState: personsState.otherState,
      })
   }

   const nameChangedHandler = (event) =>{
      setPersonsState({
         persons: [
            { name: 'Maxxxxx', age: 999 },
            { name: event.target.value, age: 122 },
            { name: 'Souza Magalhaes', age: 12 }
         ],
         otherState: personsState.otherState,
      })
   }

   const [counter, setCounter] = useState({ counter: 0 })
   const addCounter = () => {
      setCounter({
         counter: counter.counter + 1
      })
   }


   const style ={
      button:{
         backgroundColor: 'blue',
         font: 'inherit',
         borderColor: '1px solid blue',
         padding: '8px',
         cursor: 'pointer'
      }
   }


   return (
      <div className="App">
         <h1>React App</h1>
         <h1>learning</h1>

         <button style={style.button} >Normal button without material component</button>

         <Button variant="contained" color="secondary" onClick={() => switchNameHandler('Trocando nome by arrowfunction')}>
            click here
         </Button>

         <Button variant="contained" color="secondary" onClick={addCounter}>
            click here to change the counter value, ++1
         </Button>

         <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
         >
            This is a props children
         </Person>

         <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            click={switchNameHandler.bind(this, 'maximilian be')} //passando como argumento pra function.
            changed={nameChangedHandler}
         >
            My Hobbies: Racing
         </Person>

         <Person
            name={personsState.persons[2].name}
            age={personsState.persons[2].age}
         >
            inside the person component. we access the value using props.children
         </Person>

         <Person name={counter.counter}></Person>

      </div>
   )

}

export default App;
