import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");
  font-family: Roboto, sans-serif;
  border: 2px solid #581a4e;
  border-radius: 2%;
  width: 30vw;
  height: 100vh;
  font-size: 4, 5rem;
  margin: 2% 35%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fffbe0;
`;

export const Header = styled.div`
  font-family: Roboto, sans-serif;
  width: 100%;
  height: 12%;
  border-bottom: 2px solid #581a4e;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color:  #fffbe0;

  button {
    display: flex;
    margin-right: 2%;
    border: 3px solid #581a4e;
    border-radius: 50%;
    background-color: #581a4e;
  }
`;

export const Logo = styled.h4`
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");
   font-family: Roboto, sans-serif;
   font-size: 20px;
    display: flex;
    margin-left: 34%;
`

export const MatchList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px;

  div{
    display: flex;
    flex-direction: row;
  }
`

export const UserPhoto = styled.img`
    height: 35px;
    width: 35px;
    margin-right: 10px;
    border-radius: 50%;
    padding: 4px;
`


function TelaMatch (props) {
const [matchs, setMatchs] = useState ([])

const getMatchs = () =>{
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/belen-shaw/matches')
    .then((res) => {
      setMatchs(res.data.matches)
      console.log(res.data.matches)
    })
    .catch((err) => {
      console.log(err.res.data);
    });

}

useEffect(() => {
  getMatchs()
}, [matchs]);


const listMatchs = matchs.map ((match)=>{
  return (
  <div key={match.id}>
    <UserPhoto src={match.photo}/>
    <h4>{match.name}</h4>
  </div>
  )
})



  return (
    <Container>
      <Header>
      <Logo>ASTRO MATCH</Logo>
      <button onClick={(props.goToTelaInicial)} >voltar</button>
      </Header>
      <MatchList>
        {listMatchs}

      </MatchList>

    </Container>
  );
}

export default TelaMatch;