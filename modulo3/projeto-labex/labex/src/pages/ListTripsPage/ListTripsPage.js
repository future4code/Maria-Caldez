import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Cont, Header, Button, ContainerCardTrip, CardTrip} from "./StyledListTripsPage";


function ListTripsPage() {
const navigate= useNavigate ()

const goToHomePage = () =>{
  navigate("/")
}
const goToAplication = () =>{
  navigate("/trips/application")
}
  return (
    <Container>
      <Cont>
      <Header>
        <Button onClick={goToAplication}>Inscrever-me</Button>
        <h1>Labex-Trips</h1>
        <Button onClick={goToHomePage}>Home</Button>
      </Header>
      <ContainerCardTrip>
      <CardTrip>
        <img src="https://i.giphy.com/media/fUXZfIDUl8K7lJJ9KK/giphy.gif"/>
        <p><strong>Nome:</strong>Via Láctea Xpress</p>
        <p><strong>Descrição:</strong> Venha com agente no foguete da SpaceX para uma viagem dos sonhos por Júpiter, o maior planeta do sistema solar</p>
        <p><strong>Planeta:</strong>Júpiter</p>
        <p><strong>Duração:</strong>120</p>
        <data>2022-10-13</data>

      </CardTrip> 
      <CardTrip>
        <img src="https://i.giphy.com/media/fUXZfIDUl8K7lJJ9KK/giphy.gif"/>
        <p><strong>Nome:</strong>Via Láctea Xpress</p>
        <p><strong>Descrição:</strong> Venha com agente no foguete da SpaceX para uma viagem dos sonhos por Júpiter, o maior planeta do sistema solar</p>
        <p><strong>Planeta:</strong>Júpiter</p>
        <p><strong>Duração:</strong>120</p>
        <data>2022-10-13</data>

      </CardTrip>
      <CardTrip>
        <img src="https://i.giphy.com/media/fUXZfIDUl8K7lJJ9KK/giphy.gif"/>
        <p><strong>Nome:</strong>Via Láctea Xpress</p>
        <p><strong>Descrição:</strong> Venha com agente no foguete da SpaceX para uma viagem dos sonhos por Júpiter, o maior planeta do sistema solar</p>
        <p><strong>Planeta:</strong>Júpiter</p>
        <p><strong>Duração:</strong>120</p>
        <data>2022-10-13</data>

      </CardTrip>
      <CardTrip>
        <img src="https://i.giphy.com/media/fUXZfIDUl8K7lJJ9KK/giphy.gif"/>
        <p><strong>Nome:</strong>Via Láctea Xpress</p>
        <p><strong>Descrição:</strong> Venha com agente no foguete da SpaceX para uma viagem dos sonhos por Júpiter, o maior planeta do sistema solar</p>
        <p><strong>Planeta:</strong>Júpiter</p>
        <p><strong>Duração:</strong>120</p>
        <data>2022-10-13</data>

      </CardTrip>
      <CardTrip>
        <img src="https://i.giphy.com/media/fUXZfIDUl8K7lJJ9KK/giphy.gif"/>
        <p><strong>Nome:</strong>Via Láctea Xpress</p>
        <p><strong>Descrição:</strong> Venha com agente no foguete da SpaceX para uma viagem dos sonhos por Júpiter, o maior planeta do sistema solar</p>
        <p><strong>Planeta:</strong>Júpiter</p>
        <p><strong>Duração:</strong>120</p>
        <data>2022-10-13</data>

      </CardTrip>
      </ContainerCardTrip>
      </Cont>
    </Container>
  );
}

export default ListTripsPage;