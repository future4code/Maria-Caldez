import React from "react";
import { Button, CardTrip } from "./StyledAdminHomePage";
import { goToDetailsPage } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";



function CardTripAdmin(props) {
const navigate= useNavigate ()


  const trip = props.trip;

  return (
    <CardTrip onClick={()=>goToDetailsPage(navigate,trip.id)}>
        <h4>{trip.name}</h4>
        <p>{trip.description}</p>
        <p>{trip.planet}</p>
        <p><strong>Duração:</strong> {trip.durationInDays}</p>
        <p><strong>Data:</strong> {trip.date}</p>

        <Button>Apagar</Button>
    </CardTrip>
  );
}

export default CardTripAdmin;


