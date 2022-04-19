
import React, { useState } from 'react'
// import React from 'react'
import TelaMatch from './pages/telaMatch/TelaMatch';
import TelaInicial from './pages/telaInicial/TelaInicial';



function App () {
  const [screen, setScreen] = ("telaMatch")

 
  const selectPage = () =>{
    switch (screen){
      case "TelaInicial":
        return <TelaInicial/>
      case "TelaMatch":
        return <TelaMatch/>
      default:
        return <TelaInicial/>

    } 
  }
    return (
      <div>
      {selectPage()}      
      </div>
    )

}

export default App;
