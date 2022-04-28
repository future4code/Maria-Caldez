import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { BASE_URL } from "../../Constants/Urls";
import { useNavigate } from "react-router-dom";
import CardsTrips from './CardsTrips';
import { goToApplicationPage, goToHomePage } from "../../Routes/coordinator";
import { Container, Cont, Header, Button, ContainerCardTrip, CardTrip} from "./StyledListTripsPage";


function ListTripsPage() {
const [tripsData, setTripsData]= useState ([])
// router
const navigate= useNavigate ()
// axio
const getTripsData = () => {
  axios
      .get(`${BASE_URL}/trips`)
      .then((response) => setTripsData(response.data))
      .catch((err) => console.log(err.response.data.message))
}
//hook
useEffect(() => {
  getTripsData()
}, [])
// map componente filho card
const ListTrips = tripsData.trips && tripsData.trips.map((trip) => {
  return <CardsTrips key={trip.id} trip={trip} />
})


  return (
    <Container>
      <Cont>
      <Header>
        <Button onClick={()=>goToApplicationPage(navigate)}>Inscrever-me</Button>
        <h1>Labex-Trips</h1>
        <Button onClick={()=>goToHomePage(navigate)}>Home</Button>
      </Header>
      <ContainerCardTrip>
      
        {ListTrips}
    
      </ContainerCardTrip>
      </Cont>
    </Container>
  );
}

export default ListTripsPage;