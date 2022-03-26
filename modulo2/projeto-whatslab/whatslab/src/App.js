import React from "react";
import './App.css';
import {Main, ContainerChat, Entradas, Usuario, Texto, TelaEnviados, Boton, Mensagens } from "./styles";

import ComponenteUm from "./Components/ComponenteUm";




class App extends React.Component {
  state = {

    chat: [], 
    valorInputUsuario: "",
    valorInputMensagem:"",    
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario:this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };
    
    const novoChat = [...this.state.chat, novaMensagem];
    this.setState({ chat: novoChat });
    this.setState({valorInputMensagem:""})

  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };
  
  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };


  render() {
    const listaDeMensagens = this.state.chat.map((mensaje,i) => {
      return (
        <Mensagens key = {[i]}>
          <strong>{mensaje.usuario}</strong>: {mensaje.mensagem}
        </Mensagens>     
      );
    });

console.log(listaDeMensagens)

    return (
      <Main>
        <ContainerChat>

          <TelaEnviados>
            {listaDeMensagens}
          </TelaEnviados>
          
          <Entradas>         
            <Usuario
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuario"}
            />
            <span>:</span>
            <Texto
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />
            <Boton onClick={this.adicionaMensagem}>Enviar</Boton>
          </Entradas>

          </ContainerChat>
      </Main>
    );
  }
}

export default App;
