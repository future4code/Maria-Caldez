import React from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Urls";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/UseForm";
import { goToHomePage, goToAdminHomePage } from "../../Routes/coordinator";
import {
  Container,
  Cont,
  Header,
  Button,
  ContainerLogin,
} from "./StyledLoginPage";

function LoginPage() {
  const navigate = useNavigate();
  const {form, onChange, cleanFields} = useForm({email:"", password:""})
  
  
  const onSubmitLogin = (event) => {
    event.preventDefault()
    
    const body = form

    axios.post(`${BASE_URL}/login`,body)
        .then((response) => {window.localStorage.setItem("token", response.data.token)
        goToAdminHomePage(navigate)
        cleanFields()
      })
        
        .catch((error) => alert("Usuario não autorizado"))
  };



  // const onChange = (event) =>{
  //   const {name, value} = event.target
  //   setForm({...form, [name]:value});
  // }
  console.log(form)
  return (
    <Container>
      <Cont>
        <Header>
          <h1>Labex-Admin</h1>
          <Button onClick={() => goToHomePage(navigate)}>Home</Button>
        </Header>
        <ContainerLogin onSubmit={onSubmitLogin}>
          <p>Esta área é destinada para administradores</p>
          <input
            required
            name="email"
            type="email"
            placeholder="Ingresse seu e-mail"
            value={form.email}
            onChange={onChange}
          />
          <input
            required
            name="password"
            type="password"
            placeholder="Ingresse sua senha"
            value={form.password}
            onChange={onChange}
            pattern={"^.{6,}"}
            title="Sua senha deve ter minimo 6 carateres"
          />

          <Button>Login</Button>
        </ContainerLogin>
      </Cont>
    </Container>
  );
}

export default LoginPage;
