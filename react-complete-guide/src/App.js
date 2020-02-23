import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Button from '@material-ui/core/Button'

class App extends Component {

   state = {
      persons: [
         { name: 'Max', age: 23 },
         { name: 'Diego', age: 34 },
         { name: 'Alex', age: 42 }
      ],
      counter: 1
   }

   render() {
      return (
         <div className="App">
            <h1>Hi, i'm a react App</h1>
            <p>This is really working</p>
            <Button variant="outlined" color="secondary"> Switch name</Button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
            <i>{this.state.counter}</i>
         </div>
      );

      //o codigo acima nao eh HTML. é jsx que no final eh compilado para o seguinte codigo abaixo
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, im Diego'))
   }
}

export default App;