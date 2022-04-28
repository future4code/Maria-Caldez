import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/coordinator";

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
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [body, setBody] = useState ({})
// router
  const navigate = useNavigate();
  
// para capturar valores
  const enviarformulario = () => {
    setBody(novoBody) 
    console.log(novoBody)
  }
  const novoBody = {
    name:  name ,
    age:  age ,
    applicationText: applicationText,
    profession: profession,
    country: country,
  };


// const aplyToTrip = () => {
//   axios
//       .get(`${BASE_URL}/trips/${id}/apply`)
//       .then((res) => )
//       .catch((err) => console.log(err.response.data))
// }
// //hook
// useEffect(() => {
//   aplyToTrip()
// }, [])


  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeText = (event) => {
    setApplicationText(event.target.value);
  };

  const onChangeProfession = (event) => {
    setProfession(event.target.value);
  };

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  // fin funciones capturar valores

  return (
    <Container>
      <Cont>
        <Header>
          <h1>Labex-Cadastro</h1>
          <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </Header>

        <Form>
          <Select>
            <option>Escolha uma viagem</option>
          </Select>
          <Input placeholder="Nome" value={name} onChange={onChangeName} />
          <Input placeholder="Idade" value={age} onChange={onChangeAge} />
          <Input
            placeholder="Texto Candidatura"
            value={applicationText}
            onChange={onChangeText}
          />
          <Input
            placeholder="Profissão"
            value={profession}
            onChange={onChangeProfession}
          />
          <Input
            placeholder="País"
            value={country}
            onChange={onChangeCountry}
          />
        </Form>
        <Button onClick={enviarformulario}>Enviar Cadastro</Button>
      </Cont>
    </Container>
  );
}

export default ApplicationFormPage;
