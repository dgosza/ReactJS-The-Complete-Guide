import React, { useState } from 'react';
import ValidationComponent from './components/ValidationComponent'
import Charcomponent from './components/CharComponent';

import './App.css';

const App = () => {

   const [counter, setCounter] = useState({ value: 0 })
   const [showCounter, setShowCounter] = useState({ value: false })
   const [textValue, setTextValue] = useState({ value: null })
   const [arraytextValue, setarrayTextValue] = useState({ value: [] })

   const verifyStatus = (event) => {
      const name = event.target.value
      const nameArray = name.split("");
      const value = name.length != 0 ? true : false;

      setShowCounter({ value: value });
      setTextValue({ value: name })
      setarrayTextValue({ value: nameArray })

      if (value) {
         const nameLenght = name.length;
         setCounter({ value: nameLenght })
      }
   }

   const handleCharComponent = (event, eachLetter, index) => {
      const texto = event.target.value;
      console.log(texto)
      console.log(index)
   }

   if (showCounter.value) {
      var contador = (
         <div id="center">
            CONTADOR: <ValidationComponent length={counter.value} text={textValue.value} />
         </div>
      )
   }

   const componente = (
      arraytextValue.value.map((eachLetter, index) => {
         return <Charcomponent text={eachLetter} key={index} array={arraytextValue} click={ (event)=> handleCharComponent( eachLetter, index ) } ></Charcomponent>
      })
   )




   return (
      <div className="App">
         <input placeholder="digite aqui..." onChange={verifyStatus} ></input>

         {contador}
         {componente}

      </div>
   );
}

export default App;
