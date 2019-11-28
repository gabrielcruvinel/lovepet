import React from 'react';

import { Container, NameUsuario } from './styles';


export default function CardUsuario() {
  const infoUsuario = {
	name:"Gabriel",
	
  };
  return (
	<Container>
		<NameUsuario>
			<h1>Olá , {infoUsuario.name}</h1>
		</NameUsuario>
	</Container>
  );
}
