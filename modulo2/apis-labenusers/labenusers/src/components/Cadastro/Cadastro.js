import React from 'react';
import axios from 'axios';



export default class Cadastro extends React.Component {
    state = {
      nome :  "",
      email : ""
  
    }

    modificarNome = event => {
       const novoNome = event.target.value
        this.setState ({nome: novoNome})
    }

    modificarEmail = event => {
        const novoEmail = event.target.value
         this.setState ({email: novoEmail})
     }

    
    criarUsuario = () => {
        const requisitoHeaders = {
          headers: {
            Authorization: "maria-belen-caldez-shaw"
          }
        };
    
        const requisitoBody = {
          name: this.state.nome,
          email: this.state.email
        };
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            requisitoBody,
            requisitoHeaders
          )
          .then((res) => {
            alert(`Usuário ${this.state.nome} criado`);
            this.setState({name: "", email: "" });
          })
          .catch(error => {
            alert("Erro usuário");
            console.log(error);
          });
      };
  

  
    render (){
      return(
      <div>
          <h2>Ingresse seus dados</h2>
        <div>
          <input placeholder='Nome' value = {this.state.name} onChange={this.modificarNome}></input>
          <input placeholder='email' value = {this.state.email} onChange={this.modificarEmail}></input>
        </div>
  
        <button onClick= {this.criarUsuario} >Criar Usuario</button>
        <div>
        <button onClick={()=>this.props.mudarPagina("Lista")}>trocar tela</button>
        </div>
        
     
      </div>
      );
    }
  
  }
  