import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../hooks/UseForm";
import { BASE_URL } from "../../Constants/Urls";
import { Planets } from "../../Constants/Planets";
import { useNavigate } from "react-router-dom";
import useProtect from "../../hooks/UseProtect";
import { goToAdminHomePage, gologOut } from "../../Routes/coordinator";
import {
  Container,
  Cont,
  Header,
  Form,
  Input,
  Select,
  Button,
  Option
} from "./StyledCreateTripPage";

function CreateTripPage() {
  const [body, setBody] = useState("")
  const navigate = useNavigate();
  useProtect();




  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const upDateForm = (event)=>{
  event.preventDefault();

   return setBody(form)
  }

  const CreateTrip = () => {
    // event.preventDefault();
  
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
          console.log(error.response.data.message)
        })
  };

useEffect ( ()=>{
  CreateTrip()
},[body])

const arrayPlanets = Planets.map ((planet)=>{
  return(
    <Option key={planet.nome} value={planet.nome}>{planet.nome}</Option>
  )
})

  return (
    <Container>
      <Cont>
        <Header>
          <Button onClick={() => goToAdminHomePage(navigate)}>Voltar</Button>
          <h1>Labex-Admin</h1>
          <Button onClick={() => gologOut(navigate)}>Logout</Button>
        </Header>
        <h2>Cadastro de novas Viagens</h2>
        <Form onSubmit={upDateForm}>
          <Input
            required
            name={"name"}
            placeholder="Nome"
            value={form.name}
            onChange={onChange}
            pattern= { "^.{5,}"}
            title={"O título deve ter no mínimo 5 caracteres"}
          />
            
          <Select
          required
          name={"planet"}
          placeholder="Planeta"
          value={form.planet}
          onChange={onChange}
          >{arrayPlanets}</Select>
          <Input
            required
            name={"date"}
            placeholder="data"
            value={form.date}
            onChange={onChange}
            type={"date"}
            min={new Date()}
          />
          <Input
            required
            name={"description"}
            placeholder="descrição"
            value={form.description}
            onChange={onChange}
            pattern= { "^.{50,}"}
            title={"O nome deve ter no mínimo 50 caracteres"}
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