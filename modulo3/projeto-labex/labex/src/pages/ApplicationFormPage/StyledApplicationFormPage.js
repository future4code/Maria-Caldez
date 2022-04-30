import styled from "styled-components";
// import axios from "axios";


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
background-color: #2a003f;
display: flex;
align-items: center;
justify-content: space-between;
color: #fcc000;
letter-spacing: 4px;
font-size: 1.7rem;
padding: 1%;

h1{
  padding-left: 34%;
}


@media (min-width: 375px) and (max-width: 667px) {
        width: 100%;
        height: 10vh;
        font-size: 17px;
        display: flex;
        justify-content: flex-start;
        
        h1{
          padding: 1%;
        }
    }
`
export const Button = styled.button`
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5%;
  transition: all .1s ease-in-out;
  background: #fae62d;
  border: 4px solid #fcc000;
  margin-right: 5%;
  margin-left: 5%;
  box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;
  padding: 1%;
  cursor: pointer;
    
  :hover{
    background: #fcc000;
    border-color: #fae62d;
    color: #2a003f;
  }
`
export const Form= styled.form`
border-radius: 20px;
width: 50%;
height: 55%;
border: 3px solid #2a003f;;
margin: 3%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 2%;
box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;

@media (min-width: 375px) and (max-width: 667px) {
        width: 90%;
        height: 70vh;
  
    }

`
export const Select= styled.select`
width: 95%;
height: 8%;
margin: auto;

:hover{
box-shadow: rgb(0 0 0 / 60%) 0px 4px 8px 0px;

    border-color: #fae62d;
  }
`
export const Input= styled.input`
border-radius: 5px;
width: 94%;
height: 8%;
margin: auto;
margin: solid  #2a003f;

:hover{
box-shadow: rgb(0 0 0 / 60%) 0px 4px 8px 0px;

    border-color: #fae62d;
  }
`
