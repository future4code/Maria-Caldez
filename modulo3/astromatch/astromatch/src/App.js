import React, { useState } from "react";
import axios from "axios";
import TelaMatch from "./pages/telaMatch/TelaMatch";
import TelaInicial from "./pages/telaInicial/TelaInicial";
import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  margin: 0px;

`

function App() {
  const [screen, setScreen] = useState("telaMatch");

  const goToTelaInicial = () => {
    setScreen("TelaInicial");
  };

  const goToTelaMatch = () => {
    setScreen("TelaMatch");
  };

  const selectPage = () => {
    switch (screen) {
      case "TelaInicial":
        return <TelaInicial goToTelaMatch={goToTelaMatch} />;
      case "TelaMatch":
        return <TelaMatch goToTelaInicial={goToTelaInicial} />;
      default:
        return <TelaInicial goToTelaMatch={goToTelaMatch} />;
    }
  };

  return (
    <Container>
      {selectPage()}
    </Container>
  );
}

export default App;
