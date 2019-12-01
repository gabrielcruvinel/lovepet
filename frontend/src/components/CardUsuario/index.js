import React from 'react';
import ArrayToJson from '../../util/ArrayToJson'
import JsonToArray from '../../util/JsonToArray'
import { Container, NameUsuario } from './styles';

var usuarioLogado = localStorage.getItem("UsuarioLogado")

export default function CardUsuario() {
  return (
	<Container>
		<NameUsuario>
			<h1>Olá , {usuarioLogado}!</h1>
			{petLogado()}
		</NameUsuario>
	</Container>
  );
}

function petLogado(){
	let pets = JsonToArray(localStorage.getItem("Pets"))
	let usuarios = JsonToArray(localStorage.getItem("Usuarios"))

	for(var j=0;j<usuarios.length;j++){
		if (usuarios[j].nome === usuarioLogado) break
	}

	for(var i=0;i<pets.length;i++){
	if(pets[i].dono === usuarios[j].email) return <h1>Pet: {pets[i].nome}</h1>
	}
	return <h1>Sem pet cadastrado</h1>
}
