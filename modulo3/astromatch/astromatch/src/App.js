
import React, { useState } from 'react'
import axios from 'axios';
import TelaMatch from './pages/telaMatch/TelaMatch';
import TelaInicial from './pages/telaInicial/TelaInicial';
import styled, {createGlobalStyle} from 'styled-components';





const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  body {
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`

function App () {
  const [screen, setScreen] = useState ("telaMatch")


  const goToTelaInicial = () => {
		setScreen("TelaInicial")
	}

	const goToTelaMatch = () => {
    setScreen("TelaMatch")
  }
 
  const selectPage = () =>{
    switch (screen){
      case "TelaInicial":
        return <TelaInicial
        goToTelaMatch = {goToTelaMatch}
        />
      case "TelaMatch":
        return <TelaMatch
        goToTelaInicial = {goToTelaInicial}
        />
      default:
        return <TelaInicial
        goToTelaMatch = {goToTelaMatch}
        />

    } 
  }






    return (
      <div>
      {createGlobalStyle}
      {selectPage()}
      </div>
    )

}

export default App;
