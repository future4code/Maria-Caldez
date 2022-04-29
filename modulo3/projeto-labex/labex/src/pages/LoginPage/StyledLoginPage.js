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
  padding-left: 36%;
  
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
export const ContainerLogin = styled.form`
border: 1px solid green;
padding: 2%;
margin-top: 4%;
width: 40%;
height: 40%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

input{
width: 94%;
height: 12%;
margin: auto;
}
`