import styled from "styled-components";

export const Container = styled.div`
width: 99vw;
height: 99vh;
@media (min-width: 375px) and (max-width: 667px) {
    width: 100%;
    height: 100%;
  }
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


@media (min-width: 375px) and (max-width: 667px) {
    height: 10vh;
    font-size: 17px;
    display: flex;
    justify-content: center;
    h1 {
      font-size: small;
    }
  }
`
export const Titulo = styled.h1`
color: #2a003f;

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
    @media (min-width: 375px) and (max-width: 667px) {
    font-size: small;
  
  }
`
export const ContainerCard = styled.div`
border: 2px solid #fcc000;
  margin-bottom: 3%;
  width: 100%;
  height: 68%;
  display: flex;
  overflow: auto;
  flex: none;
  flex-flow: row nowrap;
  gap: 1%;
  padding: 2%;
  overflow: hidden;
  overflow-x: scroll;
  background-color: #2a003f;

  ::-webkit-scrollbar {
    height: 10px;
    border-radius: 400px;
    padding: 400px;
    box-decoration-break: clone;
    position: relative;
    margin: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #fae62d;
  }
  ::-webkit-scrollbar-track {
    background: #2a003f;
  }
  h3 {
    color: #2a003f;
  }

  @media (min-width: 375px) and (max-width: 667px) {
    width: 99%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
    background-color: #2a003f;
  }

`
export const CardPendiente= styled.div`
 background-color: white;
  border: 4px solid #2a003f;
  padding: 5px;
  border-radius: 5%;
  min-width: 20%;
  max-width: 20%;
  height: 95%;
  word-wrap: word-wrap;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;
  margin: 1%;

  overflow: auto;
  flex: none;
  flex-flow: row nowrap;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;

    box-decoration-break: clone;
    position: relative;
    margin: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #fae62d;
  }
  ::-webkit-scrollbar-track {
    background: #2a003f;
  }
  h3 {
    color: #2a003f;
  }

  @media (min-width: 375px) and (max-width: 667px) {
    min-width: 90%;
    max-width: 20%;
    height: 50%;
  }
`
export const Aprovados= styled.div`
  border: 5px solid  #2a003f;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2%;
  align-self: center;

`
