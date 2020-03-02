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
      otherState: 'AnotherState',
      counter: 0
   });

   console.log(personsState)


   const switchNameHandler = () => {
      // console.log('entrei no button hehe')
      //DONT DO THIS: personsState.persons[0].name = 'Diego Fulano de Tal';
   
      setPersonsState({
         persons: [
            { name: 'Diego Magalhaes de Souza', age: 999 },
            { name: 'de Souza', age: 122 },
            { name: 'Magalhaes', age: 12 }
         ]
      })
   }
   

   return (
      <div className="App">
         <h1>React App</h1>
         <h1>learning</h1>

         <Button variant="contained" color="secondary" onClick={switchNameHandler}>
            click here
            </Button>

         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
            This is a props children
            </Person>

         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
            My Hobbies: Racing
            </Person>

         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
            inside the person component. we access the value using props.children
            </Person>

      </div>
   )

}

export default App;
