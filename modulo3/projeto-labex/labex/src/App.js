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
