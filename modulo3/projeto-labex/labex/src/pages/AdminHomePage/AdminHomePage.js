import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/Urls";
import { useNavigate } from "react-router-dom";
import useProtect from "../../hooks/UseProtect";
import CardTripAdmin from "./CardTripAdmin";
import {
  goToCreatePage,
  goToLoginPage,
  goToDetailsPage,
} from "../../Routes/coordinator";
import {
  Container,
  Cont,
  Header,
  Button,
  ContainerCardTrip,
  CardTrip,
} from "./StyledAdminHomePage";

function AdminHomePage() {
  const navigate = useNavigate();
  useProtect();

  const [tripsData, setTripsData] = useState([]);
  // axio
  const getTripsData = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => setTripsData(res.data))
      .catch((err) => console.log(err.response.data.message));
  };
  //hook
  useEffect(() => {
    getTripsData();
  }, []);
  // map componente filho card
  const ListTrips =
    tripsData.trips &&
    tripsData.trips.map((trip) => {
      return <CardTripAdmin key={trip.id} trip={trip} id={trip.id} />;
    });

  return (
    <Container>
      <Cont>
        <Header>
          <Button onClick={() => goToCreatePage(navigate)}>Criar Viagem</Button>
          <h1>Labex-Admin</h1>
          <Button onClick={() => goToLoginPage(navigate)}>Logout</Button>
        </Header>
        <ContainerCardTrip>{ListTrips}</ContainerCardTrip>
      </Cont>
    </Container>
  );
}

export default AdminHomePage;
