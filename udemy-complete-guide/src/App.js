import React, { Component } from 'react';
import Person from './Person/Person.js';
import Button from '@material-ui/core/Button';

const App = () => {

   return (
      <div className="App">
         <h1>React App</h1>
         <h1>learning</h1>
         
         <Button variant="contained" color="secondary" onClick={this.switchNameHandler}>
            click here
            </Button>

         <Button variant="contained" color="secondary" onClick={this.switchEstado}>
            click here to change de state
            </Button>

         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
            This is a props children
            </Person>

         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
            My Hobbies: Racing
            </Person>

         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
            inside the person component. we access the value using props.children
            </Person>

      </div>
   )

}

export default App;


state = {
   persons: [
      { name: 'Max', age: 23 },
      { name: 'Manu', age: 29 },
      { name: 'Ste', age: 30 }
   ],
   otherState: 'outro estado 1',
   counter: 0
}

switchNameHandler = () => {
   // console.log('entrei no button hehe')
   //DONT DO THIS: this.state.persons[0].name = 'Diego Fulano de Tal';

   this.setState({
      persons: [
         { name: 'Diego Magalhaes de Souza', age: 999 },
         { name: 'de Souza', age: 122 },
         { name: 'Magalhaes', age: 12 }
      ]
   })
}

switchEstado = () => {
   this.setState({
      otherState: 'changing the value',
      counter: this.state.counter + 1
   })
}