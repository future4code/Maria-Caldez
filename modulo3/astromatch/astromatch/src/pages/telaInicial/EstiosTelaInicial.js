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
  background-color: white;
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
  background-color: white;

  button {
    display: flex;
    margin-right: 2%;
    border: 3px solid #581a4e;
    border-radius: 50%;
    background-color: #581a4e;
  }
`;

export const Logo = styled.img`
    width: 200px;
    display: flex;
    margin-left: 27%;
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
    box-shadow: rgb(30 30 30 / 70%) 0px 0px 15px 0px;

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

export const Clear = styled.button`
  border-radius: 30%;
  width: 50px;
  height: 85px;
  border: 1px solid black;
  font-size: 50px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: pink;
    transform: scale(0.9);
    color: white;
  }
`;

export const Menu = styled.p`
  border-radius: 30%;
  width: 50px;
  height: 85px;
  color: #581a4e;
  font-size: 50px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  overflow: hidden;
  margin-bottom: 31px;

  &:hover {
    color: #48a498;
  }
`;