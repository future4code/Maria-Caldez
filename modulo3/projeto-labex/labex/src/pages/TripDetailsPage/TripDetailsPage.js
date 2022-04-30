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
  Titulo,
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

  const decideCandidate = (candidateId,boolean) => {
    const body = { "approve": boolean}
    const token = localStorage.getItem("token");

    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/belen-shaw/trips/${params.id}/candidates/${candidateId}/decide`, body ,{
        headers: {
          auth: token,
        },
      } )

      .then(() => {
       
        alert("deu certo");

      })
      .catch((error) => {
        navigate(`/admin/trips/${params.id}`)
        console.log(error.response);
      });
  };

  const listCandidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((candidate) => {
    return(
        // <CardCandidate key={candidate.id} candidate={candidate}/>

        <CardPendiente key={candidate.id}>
      <p>
        <strong>Nome: </strong>
        {candidate.name}
      </p>
      <p>
        <strong>Idade: </strong>
        {candidate.age}
      </p>
      <p>
        <strong>Profissão:</strong>
        {candidate.profession}
      </p>
      <p>
        <strong>País:</strong>
        {candidate.country}
      </p>
      <p>
        <strong>Texto:</strong>
        {candidate.applicationText}
      </p>{" "}
      <div>
        <Button onClick={()=>decideCandidate(candidate.id,true)}>Aprovar</Button> <Button onClick={()=>decideCandidate(candidate.id,false)}>Reprovar</Button>
      </div>
    </CardPendiente>
    )
  })

  
  useEffect (()=>{
    getTripDetails()
  }, [listCandidates])


const listAprovados = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((app) => {
  return(
    <span key={app.id} >
      <ul>
      <h4>{app.name}</h4>
      </ul>
     </span>
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
        <Titulo>{titulo}</Titulo>
        <ContainerCard>
        {listCandidates}
        </ContainerCard>
        <Titulo>Aprovados</Titulo>
        <Aprovados>
        {listAprovados}
        </Aprovados>
  
      </Cont>
    </Container>
  );
}

export default TripDetailsPage;


