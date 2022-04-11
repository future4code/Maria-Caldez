import React from 'react';
// import axios from 'axios';

export default class DetallesUsuario extends React.Component {

    render (){

        return(
            <div>
                <p>aqui va el nombre usuario</p>
                <p>aqui va el email</p>
                <div>
                    <button>boton editar</button>
                </div>

                <button onClick={this.props.irParaLista} >Voltar para lista</button>

            </div>
        )
    }
}