import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';

export const Container = styled.div `
   border: 2px solid black;
   border-radius: 2%;
    width: 30vw;
    height: 90vh;
    font-size: 4,5rem;
    margin: 2% 35%;  

    /* padding: 1%; */
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    `

export const Header = styled.div`
    width: 100%;
    height: 12%;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    


    p {
    display: flex;
    margin-left: 37%;

    }

    button {
      display: flex;
      margin-right: 2%;

      
    }
`

export const MatchList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const UserPhoto = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`


function TelaMatch (props) {
const [matchs, setMatchs] = useState ([])

const getMatchs = () =>{
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/belen/matches')
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
}, []);


const listMatchs = matchs.map ((match)=>{
  return (
  <div key={match.id}>
    <UserPhoto src={match.photo}/>
    <span>{match.name}</span>
  </div>
  )
})



  return (
    <Container>
      <Header>
      <p>ASTRO MATCH</p>
      <button onClick={(props.goToTelaInicial)} >voltar</button>
      </Header>
      <MatchList>
        {listMatchs}

      </MatchList>

    </Container>
  );
}

export default TelaMatch;