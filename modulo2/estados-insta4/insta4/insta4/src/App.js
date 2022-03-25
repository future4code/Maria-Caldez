import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const EstilosInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;




class App extends React.Component {
  state = {
    
    feed: [
    {
      id: 0,
      nomeUsuario:'Paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },

    {
      id: 2,
      nomeUsuario:'Simone',
      fotoUsuario:'https://picsum.photos/50/57',
      fotoPost:'https://picsum.photos/200/157'
    },

    {
      id: 3,
      nomeUsuario:'Mika',
      fotoUsuario:'https://picsum.photos/50/64',
      fotoPost:'https://picsum.photos/200/164'
    }
    ],

    id: 0,
    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",

  };

  onChangeId = (event) => {
  this.setState({ id: event.target.value });
  };

  onChangeNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeFotoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  onChangeFotoPost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  onClickPost = () => {
    const novaPostagem = {
      id: this.state.id,
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };

    const novoArray = [...this.state.feed];
    novoArray.push(novaPostagem);

    this.setState({ feed: novoArray });
  };


  render() {

    let renderizaNoFeed = this.state.feed.map((post) => {
      return (
        <Post
        id={post.id}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
          <EstilosInput>
            <label>ID</label>
            <input onChange={this.onChangeId} value={this.state.id} />

            <label>Nome Usuario</label>
            <input onChange={this.onChangeNomeUsuario} value={this.state.nomeUsuario} />

            <label>Foto de Perfil</label>
            <input onChange={this.onChangeFotoUsuario} value={this.state.fotoUsuario} />

            <label>Foto Post</label>
            <input onChange={this.onChangeFotoPost} value={this.state.fotoPost} />

            <button onClick={this.onClickPost}>Publicar postagem</button>
          </EstilosInput>

        {renderizaNoFeed}
      </MainContainer>
    );
  }
}

export default App;
