import React from "react";
import { Button, CardTrip } from "./StyledAdminHomePage";
import { goToDetailsPage } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";



function CardTripAdmin(props) {
const navigate= useNavigate ()


  const trip = props.trip;

  return (
    <CardTrip onClick={()=>goToDetailsPage(navigate,trip.id)}>
        <h3>{trip.planet}</h3>
        <h2>Click para accesar as informações dos candidatos</h2>

        <h4>{trip.name}</h4>
        <p>{trip.description}</p>
        <p><strong>Duração:</strong> {trip.durationInDays}</p>
        <p><strong>Data:</strong> {trip.date}</p>
    </CardTrip>
  );
}

export default CardTripAdmin;


