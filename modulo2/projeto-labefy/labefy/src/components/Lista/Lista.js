import React from "react";
import axios from "axios";
import 
{ Container,
 ContainerLista, 
 Card, 
 Titulo, 
 TituloPlaylist,
 ContainerCard, 
 BotaoApagar, 
 BotaoAdicionar,
 ContainerTitulo } from "./styled";


const authorization = {
  headers: {
    Authorization: "maria-belen-caldez-shaw"
  }
};



export default class Lista extends React.Component {
// 
  state = {
    playlists: [],
    id: "",
    inputName: "",
   

  }
// 
  componentDidMount(){
    this.listaPlaylist()
  }
// 
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
// 
  eliminarPlaylist = (id) => {
    
      axios
            .delete (
              `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
              authorization
            )

            .then(() => {
              alert("Lista apagada com sucesso!");
              this.listaPlaylist();
              
            })
            .catch(e => {
              alert("ERRO AO APAGAR USUARIO");
            });
        
    }
  // 

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
// 
        onChangeCriarPlaylist = (e) => {
          this.setState({
            inputName: e.target.value
          });
    }
// 

 

    render() {


      return (
      <Container>
        <ContainerLista>
            <ContainerTitulo>
            <Titulo>Labefy</Titulo>
            </ContainerTitulo>
            <TituloPlaylist>Playlist</TituloPlaylist>

            <ContainerCard>
            {this.state.playlists.length === 0 && <div>Não tem listas para mostrar</div>}
            {this.state.playlists.map ((playlist)=>{
              return (
                <Card key= {playlist.id}>
                    <p key= {playlist.id} onClick ={()=> this.props.goToDetalhes(playlist.id)}>{playlist.name}</p>
                    <BotaoApagar onClick={() => this.eliminarPlaylist(playlist.id)}>Apagar</BotaoApagar>
                </Card>        
              )
            }) }
            </ContainerCard>
            

            <div>
              <h4>Crie uma nova playlist</h4>
                
              <input
                placeholder="Nova playlist"
                type="text"
                value={this.state.inputName}
                onChange={this.onChangeCriarPlaylist}
              />
              
                <BotaoAdicionar onClick={this.CriarPlaylist}>Adicionar</BotaoAdicionar>        
            </div>
        </ContainerLista>
      </Container>

      )
    }
  }
  