import React, { useState } from 'react';
import ValidationComponent from './components/ValidationComponent'

import './App.css';

const App = () => {

  const [counter, setCounter] = useState({ value: 0 })
  const [showCounter, setShowCounter] = useState({ value: false })
  const [textValue, setTextValue] = useState({ value: null })

  const receiveText = (event) => {
    const name = event.target.value
    console.log(name)
  }

  const verifyStatus = (event) => {
    const name = event.target.value
    const value = name.length != 0 ? true : false;
    setShowCounter({ value: value })
    if (value) {
      const nameLenght = name.length;
      setCounter({ value: nameLenght })
    }
  }

  if (showCounter.value) {
    var contador = (
      <div>
        CONTADOR: <ValidationComponent length={counter.value} />
      </div>
    )
  }


  return (
    <div className="App">
      <input placeholder="digite aqui..." onChange={verifyStatus, receiveText} ></input>

      {contador}

    </div>
  );
}

export default App;
