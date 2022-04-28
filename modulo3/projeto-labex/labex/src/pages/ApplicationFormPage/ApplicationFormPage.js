import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/coordinator";
import { BASE_URL } from "../../Constants/Urls";
import { useParams } from "react-router-dom";
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
  const params = useParams()
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [body, setBody] = useState ({})
  
console.log(body)

// para capturar valores
    
const aplyToTrip = () => {
  axios
      .post(`${BASE_URL}/trips/${params.id}/apply`,body)
      .then((res) => alert(res.data.message))
      .catch((err) => console.log(err.response.data))
}
//hook
useEffect(() => {
  aplyToTrip()
}, [body])

const upDateBody = () =>{
  const novoBody = {
    name:  name ,
    age:  age ,
    applicationText: applicationText,
    profession: profession,
    country: country,
  };
  return setBody (novoBody)
}




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

          <Input placeholder="Nome" value={name} onChange={onChangeName} />
          <Input placeholder="Idade" value={age} onChange={onChangeAge} type={"number"}/>
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
        <Button onClick={upDateBody}>Aplicar</Button>
      </Cont>
    </Container>
  );
}

export default ApplicationFormPage;
