import React from 'react';
import styled from 'styled-components';
import Cadastro from './components/Cadastro/Cadastro';
import Lista from './components/Lista/Lista';
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario';


const Container =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export default class App extends React.Component {

  state = {

    tela: "Cadastro"
  }

  
  // mudarPagina = (tela) => {
  //   alert(tela)
  //   this.setState({tela:tela})

  // }

  escolheTela= () => {
    switch (this.state.tela){
      case "Cadastro":
        return <Cadastro irParaLista={this.irParaLista}/>
      case "Lista":
        return <Lista irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Error</div>
    }

  } 

  irParaCadastro = () =>{
    this.setState({tela: "Cadastro"})

  }

  irParaLista = () =>{
    this.setState({tela: "Lista"})

  }



  render(){

    
    // const renderizarTela = () => { 
    //   if (this.state.tela === "Cadastro") {
    //     return <Cadastro 
    //     mudarPagina= {this.mudarPagina}/>
    //   }else
    //   if(this.state.tela ==="Lista"){
    //     return <Lista
    //     mudarPagina= {this.mudarPagina}/>
    //   }
    // }

    return(
    <Container>
{/*       
      <div>
        
        {renderizarTela()}
      </div> */}

      <div>
        {this.escolheTela()}

        
      </div>

    </Container>
    );
  }  

}

