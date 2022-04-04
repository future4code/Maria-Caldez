import styled from "styled-components";



export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0%;
  margin: 0%;
  background-color: snow;


`;


export const ContainerChat = styled.p`
  width: 33%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #5878ca;
  border-radius:10px ;
  background-color: ghostwhite;

`;

export const TelaEnviados = styled.p`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2%;
  overflow: scroll;
  overflow: auto;
  min-width: 90%;
  font-family: sans-serif;  
  border: 2px solid #5878ca;
  border-radius:10px ;
  background-color: white ;


`;

export const Mensagens = styled.p`
  width: 93%;
  height: 5%;
  display: flex;
  padding: 0%;
  background-color: antiquewhite;
  border-radius: 5px;
`;

export const Entradas = styled.div`
  width: 93%;
  height: 5%;
  display: flex;
  padding: 3%;
`;

export const Usuario = styled.input`
  width: 20%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius: 35px;
  border: 2px solid #5878ca;
  
`;

export const Texto = styled.input`
  width: 68%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 35px;
  border: 2px solid #5878ca;
`;

export const Boton = styled.button`
  border-radius: 35px;
  border: 2px solid #5878ca;
`;
