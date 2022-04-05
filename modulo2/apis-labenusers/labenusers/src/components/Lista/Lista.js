import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import userEvent from '@testing-library/user-event';


const requisitoHeaders = {
    headers: {
      Authorization: "maria-belen-caldez-shaw"
    }
  };


export default class Lista extends React.Component {

    state = {
        listaUsuario: [],
        nome:"",
        userId:""

    }

    componentDidMount() {
        this.pegarLista();
    }

    pegarLista = () =>{
        axios 
            .get (
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            requisitoHeaders
            )
        .then(response => {
            this.setState ({listaUsuario: response.data})
        })
    }

    apagarUsuario = userId => {
        if (window.confirm ("Deseja apagar usuário?")){

            axios
                .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                requisitoHeaders
                )
                .then (() =>{
                    alert("Usuário apagado")
                    this.pegarLista()
                })
                .catch( error => {
                    alert ("Error")
                })
        }
    }
  
    render(){
      return(
      <div>
          <ul>
              {this.state.listaUsuario.map (usuario => {
                  return (
                    <li key ={usuario.id} > 
                    <span>{usuario.name}</span>
                  <button onClick={()=> this.apagarUsuario(usuario.id)}>Apagar</button>
              </li>
                  )
              })}
              
          </ul>
          
          <h3>Procurar Usuario</h3>
          <input placeholder='Nome exato para buscar'></input>
          <button>Salvar edição</button>

          <div>
              <button onClick={()=> this.props.mudarPagina("Cadastro")} >Trocar Tela</button>
          </div>
      </div>
      );
    }
  
  }
  