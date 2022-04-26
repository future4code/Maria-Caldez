import React from "react";
import { useNavigate } from "react-router-dom";

import { Container,Cont,Header,Form,Select,Input,Button } from "./StyledApplicationFormPage";

function ApplicationFormPage() {
  const navigate= useNavigate ()

  const goBack = () =>{
    navigate(-1)
  }

  return (
    <Container>
      <Cont>
      <Header>
        <h1>Labex-Cadastro</h1>
        <Button onClick={goBack}>Voltar</Button>
      </Header>
      
      <Form>
      <Select>
        <option>Escolha uma viagem</option>
      </Select>
      <Input placeholder="Nome"></Input>
      <Input placeholder="Idade"></Input>
      <Input placeholder="Texto Candidatura"></Input>
      <Input placeholder="Profição"></Input>
      <Select>
        <option>Escolha um País</option>
      </Select>

      </Form>
      <Button>Enviar Cadastro</Button>
      </Cont>
    </Container>
  );
}

export default ApplicationFormPage;