import React, { useState,useEffect } from 'react'
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
    justify-content: space-between;
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



export const Profile = styled.div`
  height: 100%;
  width: 92%;
  margin: 2%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 2%;

  img{
    display: flex;
    width: 100%;
    height: 80%;
  }

`

export const Name = styled.p`
  display: flex;
  font-weight: bold;
  font-size: 1.8rem;
  color: black;
  margin-bottom: 1%;
  margin: 2%;

`
export const YesNo = styled.div`
  width: 80%;
  height: 10%;
  margin: 5%;
  padding: 5%;
  border: 1px solid pink;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

`


function TelaInicial(props) {
const [profile, setProfile] = useState ({})


const getProfile = () =>{
  axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/belen/person`)
    .then((res) => {
      setProfile(res.data.profile)
    })
    .catch((err) => {
      console.log(err);
    });

}

const chooseProfile = (id, boolean) =>
{

  const body ={
    id: id,
    choice: boolean
  }
  axios
    .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/belen/choose-person',body)
    .then(()=> {getProfile()})
    .catch((err) => {
      console.log(err);
    });


}

useEffect(() => {
  getProfile()
}, []);

const putClear = () =>{
  axios
  .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/belen/clear`)
  .then(()=> {getProfile()})
  .catch((err) => {
    console.log(err);
  });
}



  return (
      <Container>
      <Header>
      <p>ASTRO MATCH</p>
      <button onClick={(props.goToTelaMatch)}>O</button>
      </Header>

      <Profile >
            
        <img src={profile.photo}/>
        <Name >{profile.name}</Name>
        <p>{profile.bio}</p>

      </Profile>
    
      <YesNo>
      <button onClick={()=> chooseProfile(profile.id, false)}>x</button>
      <button onClick ={()=> chooseProfile(profile.id, true)}>♥️</button>
      </YesNo>
      <button onClick={putClear}>Limpar</button>    

      </Container>
  );
}

export default TelaInicial;
