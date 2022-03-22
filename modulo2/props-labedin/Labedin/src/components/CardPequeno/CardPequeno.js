import React from 'react';
import styled from 'styled-components';

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 550px;
    `
    const Iconos = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `
    const DatoUm = styled.h4`
    margin-bottom: 15px;
    `
    const Datos = styled.div`
    display: flex;
    flex-direction:row;
    justify-items: flex-start;
    `




function CardPequeno(props) {
    return (
        <SmallCard>
            <Iconos src={ props.imagem } />
            <Datos>
                <DatoUm>{ props.datoUm }</DatoUm>
                <p>{ props.datoDois }</p>
            </Datos>
        </SmallCard>
    )
}

export default CardPequeno;
