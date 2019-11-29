import React from 'react';
import Usuarios from '../../database/usuarios'
import usuarioLogado from '../../database/usuarioLogado'

import { Container, NameUsuario } from './styles';


export default function CardUsuario() {
    //Procura qual o id do usuário logado. Por algum motivo, a função indexOf nao funciona
    let id=0;
    while(Usuarios[id].nome !== usuarioLogado){
        id++;
    }
  return (
	<Container>
		<NameUsuario>
			<h1>Olá , {Usuarios[id].nome}</h1>
		</NameUsuario>
	</Container>
  );
}
