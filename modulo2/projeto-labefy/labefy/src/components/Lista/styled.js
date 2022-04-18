import styled from "styled-components";



// #003d58 #006645 #2a8f44
// #ffc586 #ffa994



export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #003d58;
  display: flex;
  align-items: center;
  justify-content: center;
  
 
`;

export const ContainerLista = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 99%;
  height: 99%;
  background-color: black;
  color: palevioletred;


`;



export const ContainerTitulo = styled.div`
    display: grid;
    width: 90%;
    grid-template-rows: auto-fill;
    grid-gap: 16px;

`;

export const Titulo = styled.h1`
  color: palevioletred;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  font-family: "Consolas", monospace;
  font-size: 50px;
  `;


export const TituloPlaylist = styled.h2`
    color: palevioletred;



`;

export const ContainerCard = styled.ul`
  color: palevioletred;
  width: 95%;
  height: 95%;
  width: 50px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

`;


export const Card = styled.li`
   cursor: pointer;
  background: transparent;
  font-size: 26px;
  border-radius: 40px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.45em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;

`;


export const BotaoApagar = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
`;

export const BotaoAdicionar = styled.button`
cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;}
`;


