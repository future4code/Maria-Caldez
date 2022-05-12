import React from "react";
import { Router } from "./Routes/Router";

import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
  @media (min-width: 375px) and (max-width: 667px) {
        width: 100vw;
        height: 100vh;
        background-color: black;
    }
`

function App() {
  return (
    <div>
      <Router/>

      <GlobalStyle/>
        
    </div>
  );
}

export default App;
