import React from 'react';
import styled from 'styled-components';
import Cadastro from './components/Cadastro/Cadastro';
import Lista from './components/Lista/Lista';


const Container =  styled.div`
  background-color: gray;
`


export default class App extends React.Component {

  state = {

    tela: "Cadastro"
  }

  mudarPagina = (tela) => {
    alert(tela)
    this.setState({tela:tela})

  }


  render(){

    const renderizarTela = () => { 
      if (this.state.tela === "Cadastro") {
        return <Cadastro 
        mudarPagina= {this.mudarPagina}/>
      }else
      if(this.state.tela ==="Lista"){
        return <Lista
        mudarPagina= {this.mudarPagina}/>
      }
    }

    return(
    <Container>
      
      <div>
        
        {renderizarTela()}
      </div>

    </Container>
    );
  }  

}

