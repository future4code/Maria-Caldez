import React from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationPage } from "../../Routes/coordinator";
import { Button, CardTrip, Container, ContainerMae } from "./StyledListTripsPage";

function CardsTrips(props) {
const navigate= useNavigate ()

  const trip = props.trip;

  return (
    <ContainerMae>
    <CardTrip>
      <img src="https://i.giphy.com/media/fUXZfIDUl8K7lJJ9KK/giphy.gif" />
      <h3>{trip.planet}</h3>
      <h5>{trip.name}</h5>
      <p>{trip.description}</p>    
      <p><strong>Duração:</strong> {trip.durationInDays}</p>
      <p><strong>Data:</strong> {trip.date}</p>
    </CardTrip>
    <Button onClick={()=>goToApplicationPage(navigate,trip.id)}>Aplicar</Button>
    </ContainerMae>
  );
}

export default CardsTrips;
