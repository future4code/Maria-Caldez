import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../hooks/UseForm";
import { BASE_URL } from "../../Constants/Urls";
import { useNavigate } from "react-router-dom";
import useProtect from "../../hooks/UseProtect";
import { goToAdminHomePage, goToLoginPage } from "../../Routes/coordinator";
import {
  Container,
  Cont,
  Header,
  Form,
  Input,
  Select,
  Button,
} from "./StyledCreateTripPage";

function CreateTripPage() {
  const navigate = useNavigate();
  useProtect();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const CreateTrip = (event) => {
    // event.preventDefault();
    const body = form;
    const token = localStorage.getItem("token");

    axios.post(`${BASE_URL}/trips/`, body, {
      headers: {
        auth: token,
      },
    })
        .then((response) => {
          alert("Viagem cadastrada")
          cleanFields()
        })
        .catch((error) => {
          console.log(error.response.data)
        })
  };

  useEffect(() => {
    CreateTrip();
  }, [form]);

  return (
    <Container>
      <Cont>
        <Header>
          <Button onClick={() => goToAdminHomePage(navigate)}>Voltar</Button>
          <h1>Labex-Admin</h1>
          <Button onClick={() => goToLoginPage(navigate)}>Logout</Button>
        </Header>
        <h2>Cadastro de novas Viagens</h2>
        <Form onSubmit={CreateTrip}>
          <Input
            required
            name={"name"}
            placeholder="Nome"
            value={form.name}
            onChange={onChange}
          />

          <Input
            required
            name={"planet"}
            placeholder="Planeta"
            value={form.planet}
            onChange={onChange}
          />
          <Input
            required
            name={"date"}
            placeholder="data"
            value={form.date}
            onChange={onChange}
            type={"date"}
          />
          <Input
            required
            name={"description"}
            placeholder="descrição"
            value={form.description}
            onChange={onChange}
          />
          <Input
            required
            name={"durationInDays"}
            placeholder="Duração"
            value={form.durationInDays}
            onChange={onChange}
            type={"number"}
          />
          <Button>Enviar Cadastro</Button>
        </Form>
      </Cont>
    </Container>
  );
}

export default CreateTripPage;