import axios from "axios";
import React from "react";
import styled from "styled-components";
import Detalhes from "./components/Detalhes/Detalhes";
import Lista from "./components/Lista/Lista";



const Authorization = {
  headers: {
    authorization: "maria-belen-caldez-shaw"
  }
};

export default class App extends React.Component {
  
  state = {
   
    currentScreen: "Lista",
    onClickNameId:""

  }
// 
  goToDetalhes = (id) =>{
  this.setState({currentScreen: "Detalhes", onClickNameId: id})
  }
// 
  goToDeLista = () =>{
  this.setState({currentScreen: "Lista", onClickNameId:""}) 
  }
//  
  SelectPage = () =>{
    switch (this.state.currentScreen){
      case "Lista":
        return <Lista
        goToDetalhes= {this.goToDetalhes}
      />
      case "Detalhes":
        return <Detalhes
        id={this.state.onClickNameId}
        goToDeLista = {this.goToDeLista}
        />
      default: <Lista
      goToDetalhes= {this.goToDetalhes}
      />
    }

  }

 


  render() {
    return (

      <div>

       {this.SelectPage()}
     
  
      </div>

      
    )
  }
}
