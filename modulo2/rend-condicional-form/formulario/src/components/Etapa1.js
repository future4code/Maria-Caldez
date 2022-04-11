import React from "react";
// import './App.css';


class Etapa1 extends React.Component {

render() {
  return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        <p>1. Qual é seu nome?</p>
        <label>nome</label>
        <input onChange={this.onChangeId} value={this.state.id} />
        
        <p>2. Qual é sua idade?</p>
        <label>idade</label>
        <input onChange={this.onChangeId} value={this.state.id} />
        
        <p>3. Qual é seu email?</p>
        <label>email</label>
        <input onChange={this.onChangeId} value={this.state.id} />
        
        <p>4. Qual é sua escolaridade?</p>
        <select name="escolaridade">
        <option value="1">Ensino Médio Incompleto</option>
        <option value="2">Ensino Médio Completo</option>
        <option value="3">Ensino Superior Incompleto</option>
        <option value="4">Ensino Superior Completo</option>
        </select>


    </div>
  );
}
}


export default Etapa1;
