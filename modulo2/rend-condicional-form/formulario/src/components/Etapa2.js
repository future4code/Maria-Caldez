import React from "react";
// import './App.css';


class Etapa2 extends React.Component {


render() {
  return (
    <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

        <p>5. Qual curso?</p>
        <label>curso</label>
        <input onChange={this.onChangeId} value={this.state.id} />
        
        <p>6. Qual a unidade do ensino?</p>
        <label>unidade</label>
        <input onChange={this.onChangeId} value={this.state.id} />
    </div>
  );
}
}

export default Etapa2;
