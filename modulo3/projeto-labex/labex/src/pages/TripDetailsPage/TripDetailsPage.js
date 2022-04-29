import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Urls";
import { useNavigate, useParams } from "react-router-dom";
import useProtect from "../../hooks/UseProtect";
import { goToCreatePage, goToAdminHomePage } from "../../Routes/coordinator";
import {
  Container,
  Cont,
  Header,
  Button,
  ContainerCard,
  CardPendiente,
  Aprovados,
} from "./StyledTripDetailsPage";
import CardCandidate from "./CardCandidate";




function TripDetailsPage() {
  const [tripDetails,setTripDetails]= useState({})
  const params = useParams()
  const navigate = useNavigate();
  useProtect()

  const getTripDetails = () =>{
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })

      .then((response) => {
        setTripDetails(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  useEffect (()=>{
    getTripDetails()
  }, [listCandidates])

  const listCandidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((candidate) => {
    return(
        <CardCandidate key={candidate.id} candidate={candidate}/>
    )
  })

const listAprovados = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((app) => {
  return(
    <Aprovados key={app.id} >
      <h3>Aprovados:</h3>
      <ul>
      <p>{app.name}</p>
      </ul>
     </Aprovados>
  )
})

const titulo = tripDetails && tripDetails.trip && tripDetails.trip.planet

  return (
    <Container>
      <Cont>
        <Header>
          <Button onClick={()=>goToCreatePage(navigate)}>Criar Viagem</Button>
          <h1>Labex-Admin</h1>
          <Button onClick={()=>goToAdminHomePage(navigate)}>Voltar</Button>
        </Header>
        <h2>{titulo}</h2>
        <ContainerCard>
        {listCandidates}
        </ContainerCard>
        {listAprovados}
      </Cont>
    </Container>
  );
}

export default TripDetailsPage;


