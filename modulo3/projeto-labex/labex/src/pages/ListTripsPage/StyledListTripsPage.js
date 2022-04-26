import styled from "styled-components";

export const Container = styled.div`
width: 99vw;
height: 99vh;
`

export const Cont = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
export const Header = styled.div`
width: 100%;
height: 15%;
border: 2px solid yellow;
background-color: #2a003f;
display: flex;
align-items: center;
justify-content: space-between;
color: #fcc000;
letter-spacing: 4px;
font-size: 2.3rem;
padding: 1%;
`
export const Button= styled.button`
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 5%;
  transition: all .1s ease-in-out;
  background: #fae62d;
  border: 4px solid #fcc000;
  margin-right: 5%;
  margin-left: 5%;
  box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;
  padding: 1% 1%;

    
  :hover{
    background: #fcc000;
    border-color: #fae62d;
    color: #2a003f;
  }
`

export const ContainerCardTrip= styled.div`
margin-bottom: 3%;
border: 2px solid pink;
width: 100%;
height: 68%;
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
export const CardTrip= styled.div`
border: 2px solid green;
min-width: 20%;
max-width: 20%;
height: 85%;
padding: 1%;
margin: 1%;

img{
  width: 100%;
  height: 150px;
}
`