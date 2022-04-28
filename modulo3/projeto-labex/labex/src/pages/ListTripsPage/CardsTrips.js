import React from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationPage } from "../../Routes/coordinator";
import { Button, CardTrip } from "./StyledListTripsPage";

function CardsTrips(props) {
const navigate= useNavigate ()

  const trip = props.trip;

  return (
    <CardTrip>
      <img src="https://i.giphy.com/media/fUXZfIDUl8K7lJJ9KK/giphy.gif" />
      <h4>{trip.name}</h4>
      <p>{trip.description}</p>    
      <p><strong>Duração:</strong> {trip.durationInDays}</p>
      <p><strong>Data:</strong> {trip.date}</p>
      <Button onClick={()=>goToApplicationPage(navigate,trip.id)}>Aplicar</Button>
    </CardTrip>
  );
}

export default CardsTrips;
