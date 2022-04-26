import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
height: 99vh;
`
export const Cont = styled.div`
width: 100%;
height: 100%;
background-color: #2a003f;
display: flex;
flex-direction: column;
align-items: center;
`
export const Gift = styled.img`
display: flex;
border-radius: 50%;
height: 60%;
width: 35%;
margin-top: 7%;
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-around;
`
export const Buttons= styled.button`
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 4px;
  /* padding: 10px 60px; */
  padding: 3% 20%;

  border-radius: 5%;
  /* font-weight: 500; */
  transition: all .4s ease-in-out;
  /* background-size: 152% 100%; */
  background: #fae62d;
  border: 4px solid #fcc000;
  margin-right: 20%;
  margin-left: 20%;
  box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;


    
  :hover{
    background: #fcc000;
    border-color: #fae62d;
    color: #2a003f;
    font-weight: bold;
    font-size: 1.5rem;

  }
`
