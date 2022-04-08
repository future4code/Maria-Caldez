import React from "react";
import axios from "axios";
import Detalhes from "../Detalhes/Detalhes";
import styled from "styled-components";
import { Container } from "./styled";


const authorization = {
  headers: {
    Authorization: "maria-belen-caldez-shaw"
  }
};



export default class Lista extends React.Component {

  state = {
    playlists: [],
    id: "",
    inputName: "",

  }

  componentDidMount(){
    this.listaPlaylist()
  }

  listaPlaylist = () =>{

    axios
          .get (
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            authorization
          )
          .then(response =>{
            this.setState ({playlists: response.data.result.list})

          })

  }

  eliminarPlaylist = (id) => {
    
      axios
            .delete (
              `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
              authorization
            )

            .then(() => {
              alert("Usuário apagado com sucesso!");
              this.listaPlaylist();
              
            })
            .catch(e => {
              alert("ERRO AO APAGAR USUARIO");
            });
        
    }

    CriarPlaylist = () =>{
      const body = {
        name : this.state.inputName
      }

      axios
            .post(
              "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
              body,
              authorization
            )
            .then((res) => {
              this.listaPlaylist();
              this.setState({
                inputName: ""
              });
            })
            .catch((err) => {
              alert(err.response.data.message);
            });
        };
        onChangeCriarPlaylist = (e) => {
          this.setState({
            inputName: e.target.value
          });
    }
 
    detalhesPlaylist = (id) => {
    
        return (this.state.id === id)
    
    }

    render() {
      return (
        <Container>
            <div>
            <h2>Playlist</h2>

            <ul>
            {this.state.playlists.length === 0 && <div>No hay listas para mostrar</div>}
            {this.state.playlists.map ((playlist)=>{
              return (
                <li key= {playlist.id}>
                    <p onClick={() => this.detalhesPlaylist(playlist.id)}>{playlist.name}</p>
                    <button >Entrar</button>
                    <button onClick={() => this.eliminarPlaylist(playlist.id)}>Apagar</button>

                </li>
                
              )
            }) }
                
            </ul>
            </div>

            <div>
              <h4>Crie uma nova playlist</h4>
                
              <input
                placeholder="Nova playlist"
                type="text"
                value={this.state.inputName}
                onChange={this.onChangeCriarPlaylist}
              />
              
                <button onClick={this.CriarPlaylist}>Adicionar</button>

              <Detalhes
                idPlaylist = {this.state.id}
                namePlaylist = {this.state.inputName}
                detalhesPlaylist = {this.detalhesPlaylist}
                
              />
            </div>
        </Container>
   

      )
    }
  }
  