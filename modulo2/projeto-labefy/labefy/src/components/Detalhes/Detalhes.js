import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Listado, PaiInput, Inputs } from "./styled";

const authorization = {
  headers: {
    Authorization: "maria-belen-caldez-shaw"
  }
};
// 


export default class Detalhes extends React.Component {
// 
  state = {
    idTrack : "",
    tracks: [],
    inputTrack:"",
    inputArtist:"",
    inputUrl:""
  }
// 
  componentDidMount () {
    this.getTracks()
  }
// 

  getTracks = () =>{
    axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`,
            authorization
          )
          .then(response => {
            this.setState({ tracks: response.data.result.tracks});

          })
          .catch(err => {
            console.log(err);
          });

  }
// 


postTrack = () =>{
  const body = {
    name : this.state.inputTrack,
    artist: this.state.inputArtist,
    url: this.state.inputUrl
  }
  axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`,
          body,
          authorization
        )
        .then((res) =>{
          this.getTracks();
          this.setState({inputTrack:""});
          this.setState({inputArtist:""});
          this.setState({inputUrl:""})
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
}
// 
        onChangeAdicionarTrack = (e) => {
          this.setState({
            inputTrack: e.target.value
          });
        }

        onChangeAdicionarArtist = (e) => {
          this.setState({
            inputArtist: e.target.value
          });
        }

        onChangeAdicionarUrl = (e) => {
          this.setState({
            inputUrl: e.target.value
          });
        }
// 
removeTrack = (idTrack) =>{
  axios
       .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${idTrack}`,
        authorization
       )
       .then((res)=>{
         alert("Canção apagada com sucesso!")
         this.getTracks()
       })
       .catch(e => {
        alert("ERRO AO APAGAR CANÇÃO");
      });

}
 

  render() {
    console.log(this.state.tracks)
    return (

      <Container>
        <Listado>
        <h3>Aqui titulo lista mediante props</h3>
        <ul>
        {this.state.tracks.length === 0 && <div>Não tem canções para mostrar</div>}
        {this.state.tracks.map ((track) =>{
          return(
            <li key= {track.id}>
              <p>Nome: {track.name}</p>
              <p>Artista: {track.artist}</p>
              <audio controls>
              <source src={track.url} type="audio/mp3"/>
              </audio>
              <button onClick={() => this.removeTrack(track.id)}>Apagar</button>
            </li>
          )
          }
        )}
            
            </ul>
        </Listado>

        <PaiInput>
          <h5>Adicionar nova canção</h5>
          <Inputs
            placeholder="Ingresse o nome da Canção"
            type="text"
            value={this.state.inputTrack}
            onChange={this.onChangeAdicionarTrack}
          />
          <Inputs
            placeholder="Ingresse o nome do Artista"
            type="text"
            value={this.state.inputArtist}
            onChange={this.onChangeAdicionarArtist}
          />
          <Inputs
            placeholder="Ingresse o Link"
            type="text"
            value={this.state.inputUrl}
            onChange={this.onChangeAdicionarUrl}
          />
        

          <button onClick={this.postTrack}>Adicionar</button>

        </PaiInput>
      
        <button onClick={this.props.goToDeLista}>Home</button>
      </Container>
    )
  }
}