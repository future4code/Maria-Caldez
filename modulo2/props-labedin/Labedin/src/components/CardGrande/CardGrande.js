import React from 'react';
import styled from 'styled-components';

const BigCard = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`
const Logo = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Nome = styled.h4`
margin-bottom: 15px;
`
const  Informacao= styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
`


function CardGrande(props) {
    return (
        <BigCard>
            <Logo src={ props.imagem } />
            <Informacao>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </Informacao>
        </BigCard>
    )
}

export default CardGrande;