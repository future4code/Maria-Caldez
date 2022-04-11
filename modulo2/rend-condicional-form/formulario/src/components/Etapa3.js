import React from "react";
// import './App.css';


class Etapa3 extends React.Component {


render() {
  return (
    <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DO ENSINO</h1>

        <p>5.Por que vocês não terminou um curso de graduação?</p>
        <input onChange={this.onChangeId} value={this.state.id} />
        
        <p>6. Você fez algum curso complementar?</p>
        <select name="escolaridade">
        <option value="1">Curso técnico</option>
        <option value="2">Cursos de inglês</option>
        <option value="3">Não fiz curso complementar</option>
        </select>

    </div>
  );
}
}

export default Etapa3;
