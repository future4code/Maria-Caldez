import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/98185968?v=4" 
          nome="María Belén Caldez" 
          descricao="Sou estudante da Labenu, (falta completar)"
        />
        
        <ImagemButton 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifM6ynirbBbXT1c7m1GzNH2qxtE1gWSvH3w&usqp=CAU" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAOS5IuWwpJYuBJwm1qjMDteuGuHmZq-dqvdgWr6Tpp3y1ALHSPgWcc8yMUnEgcGv-nU&usqp=CAU" 
          nome="DuPão" 
          descricao="Cargo: Gerente de Loja. Principais atividades: difundir e reforçar a organização da empresa, responsável por coordenar as atividades da equipe" 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM87-D06KVHGl6cR_pMVewzA8PCRlVXYAzvzMrhVFzhdUxTPlUrEdW8L0KKEmyhgb8zmQ&usqp=CAU" 
          nome="Súbita indumentaria" 
          descricao="Cargo: Dona. Principais atividades: conceber, desenvolver, e confeccionar coleções de roupas femininas. Desenhar e estampar tecidos, programar e efetuar compras de matérias-primas" 
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://thumbs.dreamstime.com/b/dise%C3%B1o-del-icono-del-email-82256505.jpg" 
          
          datoUm ="E-mail: "
          datoDois =" mariabelencaldez@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="data:image/png;base64,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" 
          datoUm="Endereço:  "
          datoDois="Rua Auroreal 218"
        />
      </div>

      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="De momento não tenho redes sociais" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="De momento não tenho Twiter" 
        />        
      </div>
    </div>
  );
}

export default App;
