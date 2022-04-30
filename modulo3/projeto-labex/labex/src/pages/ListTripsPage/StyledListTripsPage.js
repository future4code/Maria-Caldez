import styled from "styled-components";

export const Container = styled.div`
width: 99vw;
height: 99vh;

@media (min-width: 375px) and (max-width: 667px) {
        width: 100%;
        height: 100%;
    }
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
color: #fcc000;
letter-spacing: 4px;
font-size: 2.3rem;
padding: 1%;
justify-content: space-between;
h1{
  padding-left: 34%;
}

@media (min-width: 375px) and (max-width: 667px) {
        height: 10vh;
        font-size: 17px;
        display: flex;
        justify-content: center;
        h1{
          padding: 1%;
        }
    }

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
  cursor: pointer;

    
  :hover{
    background: #fcc000;
    border-color: #fae62d;
    color: #2a003f;
  }
`

export const ContainerCardTrip= styled.div`
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


::-webkit-scrollbar {
    height: 10px;
    border-radius: 400px;
    padding: 400px;
    box-decoration-break: clone;
    position: relative;
    margin: 5px;

}
::-webkit-scrollbar-thumb {
    background-color: #2a003f 
    
}
::-webkit-scrollbar-track {
    background: #fae62d

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
export const CardTrip= styled.div`
border: 5px solid  white;
min-width: 95%;
max-width: 95%;
height: 80%;
word-wrap: word-wrap;
overflow: hidden;
overflow-y: scroll; 
padding: 1%;
margin: 1%;
background-color: white;
display: flex;
align-items: center;
flex-direction: column;
border-radius: 10px;
font-size: 1.5rem;

::-webkit-scrollbar {
    width: 5px;
    height: 20px;
    border-radius: 400px;
    padding: 400px;
    box-decoration-break: clone;
    position: relative;
    margin: 5px;

}
::-webkit-scrollbar-thumb {
    background-color: #fae62d
    
}
::-webkit-scrollbar-track {
    background:  #2a003f

}

img{
  width: 100%;
  height: 150px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;

  
}
:hover{

    transition: 1s;
    font-size: 1rem;
    background-color: #fae62d;
    color: #2a003f;

  }

  @media (min-width: 375px) and (max-width: 667px) {
        width: 90%;
        height: 100%;
        font-size: 1rem;

        :hover{

        transition: 1s;
        font-size: 1.2rem;

        }


    }

`
export const ContainerMae = styled.div`
background-color: white;
border: 4px solid #2a003f;
padding: 3px;
border-radius: 5%;
min-width: 20%;
max-width: 20%;
height: 95%;
word-wrap: word-wrap;
overflow: hidden;
box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;
margin: 1%;

:hover{
    border-color:   #fae62d;
    color: #2a003f;
  }


  @media (min-width: 375px) and (max-width: 667px) {
    min-width: 93%;
    max-width: 20%;

   


    }
`