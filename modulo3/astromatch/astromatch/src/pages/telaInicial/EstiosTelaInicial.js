import styled from 'styled-components';

export const Container = styled.div `
   border: 2px solid black;
   border-radius: 2%;
    width: 30vw;
    height: 90vh;
    font-size: 4,5rem;
    margin: 2% 35%;  

    /* padding: 1%; */
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    `

export const Header = styled.div`
    width: 100%;
    height: 12%;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    


    p {
    display: flex;
    margin-left: 37%;

    }

    button {
      display: flex;
      margin-right: 2%;

      
    }
`



export const Img = styled.div`
  height: 100%;
  width: 92%;
  margin: 2%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("https://picsum.photos/50/50?=1");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 2%;

  p{
  color: white;
  margin: 2%
  }

`

export const Name = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1%;
  margin: 2%;

`
export const YesNo = styled.div`
  width: 80%;
  height: 10%;
  margin: 5%;
  padding: 5%;
  border: 1px solid pink;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

`

