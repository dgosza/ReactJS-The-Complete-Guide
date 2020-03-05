import React, {useState} from 'react';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'


const App = () => {

  const [name, setName] = useState({
    name: 'Diego'
  })

  const changeNameMethod = (event) => {
    setName({
      name: event.target.value
    })
  }

  return (
    <div>
      <UserInput changeName={changeNameMethod} actualValue={name.name}></UserInput>

      <UserOutput name={name.name}></UserOutput>
      <UserOutput name={name.name}></UserOutput>
    </div>
  );
}

export default App;
