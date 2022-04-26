import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div`
width: 99vw;
height: 99vh;
`
export const Cont= styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`

export const Header = styled.div`
width: 100%;
height: 15%;
background-color: #fcc000;
display: flex;
align-items: center;
justify-content: space-between;
color:  #2a003f;
letter-spacing: 4px;
font-size: 1.7rem;
padding: 1%;

h1{
  
}
`

export const Button = styled.button`
  color: #fae62d;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5%;
  padding: 1%;
  transition: all .1s ease-in-out;
  background: #2a003f;
  border: 4px solid #5c197e;
  margin-right: 5%;
  margin-left: 5%;
  box-shadow: rgb(0 0 0 / 50%) 0px 4px 8px 0px;
    
  :hover{
    background: #5c197e;
    border-color: #2a003f;
    color: #fcc000;
    box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;


  }
`
export const ContainerCard = styled.div`
border: 2px solid black;
width: 80%;
height: 38%;
display: flex;
overflow: auto;
flex: none;
flex-flow: row nowrap;
gap: 1%;
padding: 2%;
:scroll{
    width: 10%;
    overflow-x: scroll; 
}
`
export const CardPendiente= styled.div`
border: 1px solid pink;
min-width: 25%;
max-width: 25%;
height: 95%;
padding: 1%;
`
export const Aprovados= styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  flex-direction: row;
  margin-left: 10%;
  
  ul{
    display: flex;
    flex-direction: row;

    p{
      margin: 6px;
      padding: 2px;
    }
  }
`

function TripDetailsPage() {
  
const navigate= useNavigate ()
const goBack = () =>{
    navigate(-1)
  }
  const goToCreate = ()=>{
    navigate("/admin/trips/create")
  }
  return (
    <Container>
      <Cont>
      <Header>
          <Button onClick={goToCreate}>Criar Viagem</Button>
        <h1>Labex-Admin</h1>
        <Button onClick={goBack}>Voltar</Button>
      </Header>
      <h2>Titulo da Viagem</h2>
    <ContainerCard>
      <CardPendiente>
      <p><strong>Nome: </strong>Belén</p>
        <p><strong>Idade: </strong>32</p>
        <p><strong>Profissão:</strong>Estudante</p>
        <p><strong>País:</strong>Estudante</p>
        <p><strong>Texto:</strong>Júpsdfjsdfh kjsfkdhfk khsfkjhkdjhfds kjshfjkhdskjfhdsjk kjsfhiter</p>
        <div><Button>Aprovar</Button> <Button>Reprovar</Button></div>
      </CardPendiente>
    </ContainerCard>
    <Aprovados>
    <h3>Aprovados:</h3>
      <ul>
      <p>kjkdfkh</p>
      <p>jksfkshdk</p>

      </ul>
    </Aprovados>
      


      </Cont>
    </Container>
  );
}

export default TripDetailsPage;