import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Listado, PaiInput, Inputs } from "./styled";

const authorization = {
  headers: {
    Authorization: "maria-belen-caldez-shaw"
  }
};



export default class Detalhes extends React.Component {

  state = {
    id : "",
    arrayTracks: [],
    inputTracks: "",
    inputArtist:"",
    inputUrl:""
  }

  componentDidMount () {
    this.listaTracks()
  }


  listaTracks = () =>{
    axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`,
            authorization
          )
          .then(response => {
            this.setState({ arrayTracks: response.data.result.tracks});

          })
          .catch(err => {
            console.log(err);
          });

  }


 

  render() {
    return (

      <Container>
        <Listado>
        <h3>{this.props.namePlaylist}</h3>
        <ul>
                <li>estas li dentro del map, 
                    <button>Apagar</button>
                    

                </li>
            </ul>
        </Listado>

        <PaiInput>
          <h5>Adicionar nova canção</h5>
          <Inputs placeholder="Nome Canção"></Inputs>
          <Inputs placeholder="Artista"></Inputs>
          <Inputs placeholder="link"></Inputs>

          <button>Adicionar</button>
          <button>Home</button>

        </PaiInput>
  
      </Container>
    )
  }
}
