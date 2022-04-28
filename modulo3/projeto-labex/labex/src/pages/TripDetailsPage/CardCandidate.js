import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Urls";
import { useParams, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../Routes/coordinator";
import useProtect from "../../hooks/UseProtect";
import { Button, CardPendiente } from "./StyledTripDetailsPage";

function CardCandidate(props) {
  useProtect()

  const candidate = props.candidate;
  const candidateId = candidate.id;
  const params = useParams()
  const navigate = useNavigate();


  const decideCandidate = (boolean) => {
    const body = { "approve": boolean}
    const token = localStorage.getItem("token");

    axios
      .put(`${BASE_URL}/trips/${params.id}/candidates/${candidateId}/decide`, body ,{
        headers: {
          auth: token,
        },
      }, body )

      .then(() => {
        alert("deu certo");
        goToDetailsPage(navigate,params)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    decideCandidate();
  }, [candidate]);

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
        <Button onClick={()=>decideCandidate(true)}>Aprovar</Button> <Button onClick={()=>decideCandidate(false)}>Reprovar</Button>
      </div>
    </CardPendiente>
  );
}

export default CardCandidate;
