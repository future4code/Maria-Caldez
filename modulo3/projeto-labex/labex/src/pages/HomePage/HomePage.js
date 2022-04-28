import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../Routes/coordinator";

import { Container, Cont, Gift, ContainerButtons, Buttons} from "./StyledHomePage";




function HomePage() {
const navigate= useNavigate ()



  return (
    <Container>
      <Cont>       
      <Gift src="https://acegif.com/wp-content/uploads/solar-system-6.gif" data-orig-src="https://acegif.com/wp-content/uploads/solar-system-6.gif" alt="GIFs El sistema solar y su estructura - Todos los planetas"/>
      <ContainerButtons>
        <Buttons onClick={()=>goToListTripsPage(navigate)}>Ver Viagens</Buttons>
        <Buttons onClick={()=>goToLoginPage(navigate)}>Área admin</Buttons>        
      </ContainerButtons>
      </Cont>
    </Container>
  );
}

export default HomePage;