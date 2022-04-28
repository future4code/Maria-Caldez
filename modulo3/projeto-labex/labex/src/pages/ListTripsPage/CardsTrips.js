import React from "react";
import { CardTrip } from "./StyledListTripsPage";

function CardsTrips(props) {
  const trip = props.trip;

  return (
    <CardTrip>
      <img src="https://i.giphy.com/media/fUXZfIDUl8K7lJJ9KK/giphy.gif" />
      <h4>{trip.name}</h4>
      <p>{trip.description}</p>    
      <p><strong>Duração:</strong> {trip.durationInDays}</p>
      <p><strong>Data:</strong> {trip.date}</p>
    </CardTrip>
  );
}

export default CardsTrips;
