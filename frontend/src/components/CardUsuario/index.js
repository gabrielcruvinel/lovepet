import React from 'react';

import { Container, NameUsuario } from './styles';


export default function CardUsuario() {
    let usuarioLogado = localStorage.getItem("UsuarioLogado")
  return (
	<Container>
		<NameUsuario>
			<h1>Olá , {usuarioLogado}!</h1>
		</NameUsuario>
	</Container>
  );
}
