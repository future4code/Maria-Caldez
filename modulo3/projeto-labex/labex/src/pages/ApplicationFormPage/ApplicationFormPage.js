import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/coordinator";
import { BASE_URL } from "../../Constants/Urls";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/UseForm";
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
    }, []);

   

  
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
          />
          <Input
            required
            name={"age"}
            placeholder="Idade"
            value={form.age}
            onChange={onChange}
            type={"number"}
          />
          <Input
            required
            name={"applicationText"}
            placeholder="Texto Candidatura"
            value={form.applicationText}
            onChange={onChange}
          />
          <Input
            required
            name={"profession"}
            placeholder="Profissão"
            value={form.profession}
            onChange={onChange}
          />
          <Input
            required
            name={"country"}
            placeholder="País"
            value={form.country}
            onChange={onChange}
          />
        <Button>Aplicar</Button>

        </Form>
      </Cont>
    </Container>
  );
}

export default ApplicationFormPage;