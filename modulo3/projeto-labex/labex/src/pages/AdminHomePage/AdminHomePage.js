import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/Urls";
import { useNavigate } from "react-router-dom";
import useProtect from "../../hooks/UseProtect";
import CardTripAdmin from "./CardTripAdmin";
import {
  goToCreatePage,
  gologOut,
} from "../../Routes/coordinator";
import {
  Container,
  Cont,
  Header,
  Button,
  ContainerCardTrip,
  Card,
} from "./StyledAdminHomePage";

function AdminHomePage() {
  const navigate = useNavigate();
  useProtect();

  const [tripsData, setTripsData] = useState([]);
  // axio
  const getTripsData = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => {
      setTripsData(res.data)
      }
      )
      .catch((err) => console.log(err.response.data.message));
  };


 
  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");
    console.log(token)
    const header = {
      headers: {
        auth: token,
      },
    }

    axios.delete(`${BASE_URL}/trips/${id}`, header)
        .then((response) => {
          alert(response.data)
        })
        .catch((error) => {
          console.log(error.response.data)
        })
  };

  
  //hook


  
  // map componente filho card
  const ListTrips =
    tripsData.trips &&
    tripsData.trips.map((trip) => {
      return (
        <Card>
        <CardTripAdmin key={trip.id} trip={trip} id={trip.id} />;
        <Button onClick={()=> deleteTrip(trip.id)}>Apagar</Button>
  
        </Card>
      )
     
    });
    useEffect(() => {
      getTripsData();
    }, [ListTrips]);
  
   
  return (
    <Container>
      <Cont>
        <Header>
          <Button onClick={() => goToCreatePage(navigate)}>Criar Viagem</Button>
          <h1>Labex-Admin</h1>
          <Button onClick={() => gologOut(navigate)}>Logout</Button>
        </Header>
        <ContainerCardTrip>{ListTrips}</ContainerCardTrip>
      </Cont>
    </Container>
  );
}

export default AdminHomePage;
