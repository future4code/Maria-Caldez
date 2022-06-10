import styled from 'styled-components';

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
  background-color:  white;

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

export const MatchList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px31
  span{
    display: flex;
    flex-direction: row;
  }
`

export const UserPhoto = styled.img`
    height: 35px;
    width: 35px;
    margin-right: 10px;
    border-radius: 50%;
    padding: 4px;
`
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
  `