import React from 'react';
import usuario from '../../database/usuarioObject'
import JsonToArray from '../../util/JsonToArray'
import ArrayToJson from '../../util/ArrayToJson'
import { 
  BodyCadastro,
  CadastroElement,
  BtnCadastro,
  CampoPreencher
} from './styles.js';


export default function Cadastro() {
  return (
    <BodyCadastro>
      <CadastroElement>
        <h1>Cadastro</h1>
        <form>
          <CampoPreencher>
            <label>Nome</label>
            <input id="nome" placeholder="Digite seu nome"></input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Email</label>
            <input id="email" type="email" placeholder="Digite seu email"></input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Data de Nascimento</label>
            <input id="dta_nascimento" type="date" placeholder="DD/MM/YYYY"></input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Senha</label>
            <input id="senha" type="password" placeholder="Digite sua senha"></input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Confirme sua senha</label>
            <input id="confirmaSenha" type="password" placeholder="Digite sua senha"></input>
          </CampoPreencher>
          <BtnCadastro>
            <button type="submit" onClick={cadastrarUsuario}>Cadastrar</button>
          </BtnCadastro>
        </form>
      </CadastroElement>
    </BodyCadastro>
  );
}

//Tentei criar a função cadastro, mas infelizmente só modifica o Usuários desse arquivo, não altera o do outro :(

function cadastrarUsuario(){
  let nome = document.getElementById('nome').value 
  let email = document.getElementById('email').value
  let senha = document.getElementById('senha').value 
  let confirmaSenha = document.getElementById('confirmaSenha').value
  let json = localStorage.getItem("Usuarios")
  let arrayUsuarios = JsonToArray(json)

  if(nome === '' || email === '' || senha === ''|| confirmaSenha === ''){
      //Caso algum campo esteja vazio
      return
    }

  for(let i=0;i<arrayUsuarios.length;i++){
    if(arrayUsuarios[i].email === email){
      //Email ja cadastrado
      console.log("Email ja cadastrado")
      return
    }
  }
  if(senha === confirmaSenha){
    var user = new usuario()
    user.nome = nome
    user.email = email
    user.senha = senha
    arrayUsuarios.push(user)
    let json = ArrayToJson(arrayUsuarios)
    localStorage.setItem("Usuarios",json)
  }
}