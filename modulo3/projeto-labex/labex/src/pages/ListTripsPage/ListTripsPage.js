import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Urls";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import CardsTrips from "./CardsTrips";
import { goToApplicationPage, goToHomePage } from "../../Routes/coordinator";
import {
  Container,
  Cont,
  Header,
  Button,
  ContainerCardTrip,
  CardTrip,
} from "./StyledListTripsPage";

function ListTripsPage() {
  const navigate = useNavigate();

  // const tripsList = useRequestData(`${BASE_URL}/trips`,[])

  const [tripsList, setTripsList] = useState([]);

  const getTripsData = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((response) => setTripsList(response.data))
      .catch((err) => console.log(err.response.data.message));
  };
  //hook
  useEffect(() => {
    getTripsData();
  }, []);
  // map componente filho card
  const ListTrips =
    tripsList.trips &&
    tripsList.trips.map((trip) => {
      return <CardsTrips key={trip.id} trip={trip} id={trip.id}/>;
    });

  return (
    <Container>
      <Cont>
        <Header>
          <Button onClick={() => goToApplicationPage(navigate)}>
            Inscrever-me
          </Button>
          <h1>Labex-Trips</h1>
          <Button onClick={() => goToHomePage(navigate)}>Home</Button>
        </Header>
        <ContainerCardTrip>{ListTrips}</ContainerCardTrip>
      </Cont>
    </Container>
  );
}

export default ListTripsPage;
