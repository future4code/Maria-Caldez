import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/Urls";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToAdminHomePage } from "../../Routes/coordinator";
import {
  Container,
  Cont,
  Header,
  Button,
  ContainerLogin,
} from "./StyledLoginPage";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  
  const onSubmitLogin = () => {
    const body = {
      email: email,
      password:password,
    }

    axios.post(`${BASE_URL}/login`,body)
        .then((response) => {window.localStorage.setItem("token", response.data.token)
        goToAdminHomePage(navigate)
      })
        
        .catch((error) => alert("Usuario não autorizado"))
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <Cont>
        <Header>
          <h1>Labex-Admin</h1>
          <Button onClick={() => goToHomePage(navigate)}>Home</Button>
        </Header>
        <ContainerLogin>
          <p>Esta área é destinada para administradores</p>
          <input
            placeholder="Ingresse seu e-mail"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            placeholder="Ingresse sua senha"
            value={password}
            type="password"
            onChange={onChangePassword}
          />
          <Button onClick={onSubmitLogin}>Login</Button>
        </ContainerLogin>
      </Cont>
    </Container>
  );
}

export default LoginPage;
