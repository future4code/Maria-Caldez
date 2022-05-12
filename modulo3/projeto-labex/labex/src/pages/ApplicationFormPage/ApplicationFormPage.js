import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/coordinator";
import { BASE_URL } from "../../Constants/Urls";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/UseForm";
import paises from "../../json/paises.json";
import {
  Container,
  Cont,
  Header,
  Form,
  Select,
  Input,
  Button,
} from "./StyledApplicationFormPage";


function ApplicationFormPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [body, setBody] = useState ({})

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const upDateBody=(event)=>{
    event.preventDefault();
    console.log({form});
    return setBody(form)
  }

  



  const aplyToTrip = () => {
     axios
        .post(`${BASE_URL}/trips/${params.id}/apply`, body)
        .then((res) => {alert(res.data.message)
        cleanFields()}
        )
        .catch((err) => console.log(err.response.data));
    };
   //hook
    useEffect(() => {
      aplyToTrip();
    }, [body]);

   const arrayCountry = paises.map ((pais)=>{
     return(
       <option key={pais.nome} value={pais.nome}>{pais.nome}</option>
     )
   })

  
  return (
    <Container>
      <Cont>
        <Header>
          <h1>Labex-Cadastro</h1>
          <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </Header>

        <Form onSubmit={upDateBody}>
          <Input
            required
            name={"name"}
            placeholder="Nome"
            value={form.name}
            onChange={onChange}
            pattern= { "^.{3,}"}
            title={"O nome deve ter no mínimo 3 caracteres"}
          />
          <Input
            required
            name={"age"}
            placeholder="Idade"
            value={form.age}
            onChange={onChange}
            type={"number"}
            min={"18"}
          />
          <Input
            required
            name={"applicationText"}
            placeholder="Texto Candidatura"
            value={form.applicationText}
            onChange={onChange}
            pattern= { "^.{30,}"}
            title={"O texto deve ter no mínimo 30  caracteres"}
          />
          <Input
            required
            name={"profession"}
            placeholder="Profissão"
            value={form.profession}
            onChange={onChange}
            pattern= { "^.{10,}"}
            title={"O texto deve ter no mínimo 10  caracteres"}
          />
          <Select 
            required
            name={"country"}
            value={form.country}
            onChange={onChange}>{arrayCountry}</Select>
        <Button>Aplicar</Button>

        </Form>
      </Cont>
    </Container>
  );
}

export default ApplicationFormPage;