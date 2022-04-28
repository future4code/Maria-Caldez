import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Urls";
import { useNavigate, useParams } from "react-router-dom";
import useProtect from "../../hooks/UseProtect";
import { goToCreatePage, goBack } from "../../Routes/coordinator";
import {
  Container,
  Cont,
  Header,
  Button,
  ContainerCard,
  CardPendiente,
  Aprovados,
} from "./StyledTripDetailsPage";

function TripDetailsPage() {
  const [tripDetails,setTripDetails]= useState({})
  const params = useParams()
  const navigate = useNavigate();
  
  useProtect()

  useEffect(() => {
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
  });

  const ListCandidates = tripDetails.trips && tripDetails.trips.candidates.map((candidate) => {
    return(
      <CardPendiente>
//             <p>
//               <strong>Nome: </strong>{candidate.name}
//             </p>
//             <p>
//               <strong>Idade: </strong>{candidate.age}
//             </p>
//             <p>
//               <strong>Profissão:</strong>Estudante
//             </p>
//             <p>
//               <strong>País:</strong>Estudante
//             </p>
//             <p>
//               <strong>Texto:</strong>Júpsdfjsdfh kjsfkdhfk khsfkjhkdjhfds
//               kjshfjkhdskjfhdsjk kjsfhiter
//             </p>
//             <div>
//               <Button>Aprovar</Button> <Button>Reprovar</Button>
//             </div>
//           </CardPendiente>
    )
  })
  
  return (
    <Container>
      <Cont>
        <Header>
          <Button onClick={()=>goToCreatePage(navigate)}>Criar Viagem</Button>
          <h1>Labex-Admin</h1>
          <Button onClick={()=>goBack(navigate)}>Voltar</Button>
        </Header>
        
      </Cont>
    </Container>
  );
}

export default TripDetailsPage;


// <h2>Titulo da Viagem</h2>
//         <ContainerCard>
//           <CardPendiente>
//             <p>
//               <strong>Nome: </strong>Belén
//             </p>
//             <p>
//               <strong>Idade: </strong>32
//             </p>
//             <p>
//               <strong>Profissão:</strong>Estudante
//             </p>
//             <p>
//               <strong>País:</strong>Estudante
//             </p>
//             <p>
//               <strong>Texto:</strong>Júpsdfjsdfh kjsfkdhfk khsfkjhkdjhfds
//               kjshfjkhdskjfhdsjk kjsfhiter
//             </p>
//             <div>
//               <Button>Aprovar</Button> <Button>Reprovar</Button>
//             </div>
//           </CardPendiente>
//         </ContainerCard>
//         <Aprovados>
//           <h3>Aprovados:</h3>
//           <ul>
//             <p>kjkdfkh</p>
//             <p>jksfkshdk</p>
//           </ul>
//         </Aprovados>