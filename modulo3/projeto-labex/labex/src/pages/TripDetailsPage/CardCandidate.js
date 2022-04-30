import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Urls";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { goBack, goToDetailsPage } from "../../Routes/coordinator";
import useProtect from "../../hooks/UseProtect";
import { Button, CardPendiente } from "./StyledTripDetailsPage";

function CardCandidate(props) {
  useProtect()
  const navigate = useNavigate();
  

  const candidate = props.candidate;
  const candidateId = candidate.id;
  const params = useParams()
  const [upDate, setUpDate] = useState (0)

  const decideCandidate = (candidateId,boolean) => {
    const body = { "approve": boolean}
    const token = localStorage.getItem("token");

    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/belen-shaw/trips/${params.id}/candidates/${candidateId}/decide`, body ,{
        headers: {
          auth: token,
        },
      })

      .then(() => {
       
        alert("deu certo");

      })
      .catch((error) => {
        navigate(`/admin/trips/${params.id}`)
        console.log(error.response);
      });
  };

  useEffect(() => {
    decideCandidate();
  }, []);

  return (
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
        <Button onClick={()=>decideCandidate(candidateId,true)}>Aprovar</Button> <Button onClick={()=>decideCandidate(candidateId,false)}>Reprovar</Button>
      </div>
    </CardPendiente>
  );
}

export default CardCandidate;
