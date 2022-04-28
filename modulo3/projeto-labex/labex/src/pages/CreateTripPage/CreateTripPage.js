import React from "react";
import { useNavigate } from "react-router-dom";
import useProtect from "../../hooks/UseProtect";
import { goToAdminHomePage, goToLoginPage } from "../../Routes/coordinator";
import { Container, Cont, Header, Form, Input, Select, Button } from "./StyledCreateTripPage";



function CreateTripPage() {
  const navigate= useNavigate ()
  useProtect()



  return (
    <Container>
      <Cont>
      <Header>
          <Button onClick={()=>goToAdminHomePage(navigate)}>Voltar</Button>
        <h1>Labex-Admin</h1>
        <Button onClick={()=>goToLoginPage(navigate)}>Logout</Button>
      </Header>
      <h2>Cadastro de novas Viagens</h2>
      <Form>
      
      <Input placeholder="Nome"></Input>
      <Select>
        <option>Escolha um Planeta</option>
      </Select>
      <Input placeholder="Data" type={"date"}></Input>
      <Input placeholder="Descrição"></Input>
      <Input placeholder="Duração em Dias"></Input>
      </Form>
      <Button>Enviar Cadastro</Button>
      </Cont>
    </Container>
  );
}

export default CreateTripPage;