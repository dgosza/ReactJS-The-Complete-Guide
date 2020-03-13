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

   }

   const handleCharComponent = (index, eachLetter) => {
      //copia o valor do array, exclue o index desejado e seta para o estado atual.
      const copyArray = [...arraytextValue.value]
      copyArray.splice(index, 1)
      setarrayTextValue({ value: copyArray })

      //junta o array em uma string
      const copyText = copyArray.join("")
      setTextValue({ value: copyText }) 
   
      //muda o contador
      const numberChangeCounter = copyText.length
      setCounter({ value: numberChangeCounter })

      if(showCounter.value = 0 ){
         setShowCounter({ value: false })
      }

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
         return <Charcomponent text={eachLetter} key={index} array={arraytextValue} click={(event) => handleCharComponent(index, eachLetter)} ></Charcomponent>
      })
   )

   return (
      <div className="App">
         <input placeholder="digite aqui..." onChange={verifyStatus} value={textValue.value} ></input>

         {contador}
         {componente}

      </div>
   );
}

export default App;
