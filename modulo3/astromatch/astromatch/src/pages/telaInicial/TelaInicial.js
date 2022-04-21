import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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

export const ContainerImg = styled.div`
  padding: 5px;

  width: 28vw;
  height: 90vh;

  padding: 14px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: flex-end;

  img {
    width: 100%;
    height: 400px;
    display: flex;
    align-self: center;
    border-radius: 2%;
    border: 3px solid #581a4e;

  }
`;



export const Name = styled.p`
  height: 10px;
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-bottom: 75px;
  font-weight: bold;
  font-size: 20px;
`;

export const Bio = styled.p`
  height: 10px;
  position: absolute;
  width: 27%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  padding-bottom: 15px;
  margin-top: 5px;
  z-index: 2;
`;

export const YesNo = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 2%;
  margin-left: 9px;
`;

export const Heart = styled.button`
  border-radius: 50%;
  width: 85px;
  height: 85px;
  border: 1px solid green;
  color: green;
  font-size: 50px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: green;
    transform: scale(0.9);
    color: white;
  }
`;

export const X = styled.button`
  border-radius: 50%;
  width: 85px;
  height: 85px;
  border: 1px solid red;
  color: red;
  font-size: 50px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: red;
    transform: scale(0.9);
    color: white;
  }
`;

function TelaInicial(props) {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/belen-shaw/person`
      )
      .then((res) => {
        setProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const chooseProfile = (id, boolean) => {
    const body = {
      id: id,
      choice: boolean,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/belen-shaw/choose-person",
        body
      )
      .then(() => {
        getProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const putClear = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/belen-shaw/clear`
      )
      .then(() => {
        getProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Header>
        <Logo>ASTRO MATCH</Logo>
        <button onClick={props.goToTelaMatch}>O</button>
      </Header>

      <ContainerImg>
        <img src={profile && profile.photo} />
        <Name>{profile && profile.name}</Name>
        <Bio>{profile && profile.bio}</Bio>
        
      </ContainerImg>

      <YesNo>
        <X onClick={() => chooseProfile(profile.id, false)}>X</X>
        <Heart onClick={() => chooseProfile(profile.id, true)}>♥️</Heart>
      </YesNo>
      <button onClick={putClear}>Limpar</button>
    </Container>
  );
}

export default TelaInicial;
