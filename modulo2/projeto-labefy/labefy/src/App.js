import axios from "axios";
import React from "react";
import styled from "styled-components";

import Lista from "./components/Lista/Lista";
// import Detalhes from "./components/Detalhes/Detalhes";


const Authorization = {
  headers: {
    authorization: "maria-belen-caldez-shaw"
  }
};

export default class App extends React.Component {
  





  render() {
    return (

      <div>
        <Lista
 
        />

        {/* <Detalhes/> */}
      </div>

      
    )
  }
}
