import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { UserPhoto, Container, Header, MatchList, Logo, Menu} from './EstilosTelasMatch';
import logo from '../../assets/logo.png';

function TelaMatch (props) {
const [matchs, setMatchs] = useState ([])

const getMatchs = () =>{
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/belen-shaw/matches')
    .then((res) => {
      setMatchs(res.data.matches)
      console.log(res.data.matches)
    })
    .catch((err) => {
      console.log(err.res.data);
    });

}

useEffect(() => {
  getMatchs()
}, [matchs]);


const listMatchs = matchs.map ((match)=>{
  return (
  <div key={match.id}>
    <UserPhoto src={match.photo}/>
    <span>{match.name}</span>
  </div>
  )
})



  return (
    <Container>
      <Header>
      <Logo src={logo}/>
      <Menu onClick={props.goToTelaInicial}><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="initial-icon svg-inline--fa fa-bars fa-xl"><path fill="currentColor" d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z" class=""></path></svg></Menu>
      </Header>
      <MatchList>
        {listMatchs}

      </MatchList>

    </Container>
  );
}

export default TelaMatch;