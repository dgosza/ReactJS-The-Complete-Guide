import React, { useState } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit'
import './App.css';
import Lifecycle from '../components/LifeCycle';
import WithClass from '../components/hoc/WithClass'

const App = (props) => {

   const [personsState, setPersonsState] = useState({
      persons: [
         { id: 'das', name: 'Max', age: 23 },
         { id: '312', name: 'Manu', age: 29 },
         { id: '312', name: 'Manu', age: 29 },
         { id: '534', name: 'Ste', age: 30 }
      ],
      otherState: 'AnotherState',
      showCockpit: true
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

   const togglePersonsHandler = () => {
      const doesShow = show.showPersons;
      setShow({ showPersons: !doesShow })
   }

   let personsP = null

   if (show.showPersons) {
      personsP = (
         <div>
            <Persons
               persons={personsState.persons}
               clicked={deletePersonHandler}
               changed={nameChangedHandler}
            />
         </div>
      );

   }

   return (

      <WithClass classes="App">

         <Cockpit
            person={personsState.persons}
            clickHandlePerson={togglePersonsHandler}
            showPerson={show.showPersons}
            title={props.appTitle}
         >
         </Cockpit>

         {
            personsP ? personsP : null
         }

         <Lifecycle></Lifecycle>
      </WithClass>

   )

}

export default App;
