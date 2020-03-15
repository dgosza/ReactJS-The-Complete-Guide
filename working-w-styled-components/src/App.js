import React from 'react';
import './App.css';
import styled from 'styled-components'

const ButtonUm = styled.p`
font-family: 'Bebas Neue', sans-serif;
   
`
const ButtonDois = styled.p`
   font-family: 'Acme', sans-serif;

`
const ButtonTres = styled.p`  
   font-family: 'Amatic SC', cursive;

`
const ButtonQuatro = styled.p`
   @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');        
   font-family: 'Bebas Neue', cursive;
   color: red

`

function App() {
   return (
      <div className="App">
         <globalStyles></globalStyles>

         <p>teste</p>
         <ButtonDois>The face of the moon was in shadow1</ButtonDois>
         <ButtonUm>The face of the moon was in shadow2.</ButtonUm>
         <ButtonTres>The face of the moon was in shadow3.</ButtonTres>
         <ButtonQuatro>The face of the moon was in shadow.</ButtonQuatro>

      </div>
   );
}

export default App;
