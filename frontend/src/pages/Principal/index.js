import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdPets, MdFavoriteBorder, MdQuestionAnswer, MdInfoOutline, MdAirlineSeatLegroomNormal } from "react-icons/md";
import { Link } from 'react-router-dom'; //REDIRECIONA A PAGINA
import * as Yup from 'yup';
import Usuarios from '../../database/usuarios'
import ArrayToJson from '../../util/ArrayToJson'

import { 
  Container,
  Preview,
  TxtPrincipal,
  PrincipalLogin, 
  BtnCadastro, 
  PrincipalInfo, 
  InfoPrincipalRow, 
  TitleCadastro, 
  BtnMoreInfo 
} from './styles.js';
import { array } from 'prop-types';

const schema = Yup.object().shape({

  email: Yup.string()
  .email('Digite um email válido')
  .required('Digite um email'),

  password: Yup.string()
  .required('É preciso digitar uma senha'),

});

//Preenche o localStore com os usuarios cadastrados
function preencheLocalStorage(){
  if(localStorage.getItem("Usuarios")=== null){
    let aux = ArrayToJson(Usuarios)
    localStorage.setItem("Usuarios",aux)
  }
}

export default function Principal() {
  preencheLocalStorage()
  function handleSubmit( data ) {
    console.tron.log(data)
  }

  // function validateEmail( data ) {
  //   console.log(data)
  // }

  return (
    <Container>
      <Preview>
        <PrincipalInfo>
          <TxtPrincipal>
            <h1>Encontre um parceiro ideal para o seu bichinho agora mesmo</h1>

          </TxtPrincipal>
          <div>
            <InfoPrincipalRow>
              <MdPets/><p>Cadastre seu pet</p>
            </InfoPrincipalRow>
            <InfoPrincipalRow>
              <MdFavoriteBorder/><p>Encontre um parceiro ideal para seu bichinho</p>
            </InfoPrincipalRow>
            <InfoPrincipalRow>
              <MdQuestionAnswer/><p>Converse com outros donos de pets</p>
            </InfoPrincipalRow>
          </div>
          <div>
            <BtnMoreInfo>
              <button><MdInfoOutline/>Quem Somos<Link to="/cadastro"></Link></button>
            </BtnMoreInfo>
          </div>
        </PrincipalInfo>
      </Preview>

      {/***********************LOGIN*** */}
      <PrincipalLogin>
          <h1>Entrar</h1>
          <Form schema={ schema }  onSubmit={ handleSubmit }>
            <Input name="email" type="email" id="email" placeholder="Digite seu email"></Input>
            <Input name="password" type="password" id="password" placeholder="Digite sua senha"></Input>
            <button type="submit" onClick={logar}>Entrar</button>
          </Form>
          <div>
            <BtnCadastro>
              <TitleCadastro><h2>Participe dessa comunidade agora</h2></TitleCadastro>
              <Link to="/cadastro"><button>Cadastrar</button></Link>
            </BtnCadastro>
          </div>
      </PrincipalLogin>
    </Container>
  );
}


//FUNCIONANDO
function logar(){
  const a = []
  var email = document.getElementById('email').value
  var senha = document.getElementById('password').value
  console.log(email)
  let jsonUsuarios = localStorage.getItem("Usuarios")
  let objUsuarios = JSON.parse(jsonUsuarios)
  let arrayUsuarios = Object.values(objUsuarios) 
  console.log(arrayUsuarios)
  //Localizar o usuário GAMBIARRA FODAÇ
  for(var i=0;i<arrayUsuarios.length;i++){
    if(arrayUsuarios[i].email===email){
      break
    }
  }
  console.log(arrayUsuarios[i])

  if(i < arrayUsuarios.length && arrayUsuarios[i].senha === senha){
    //USUARIO IDENTIFICADO E TD CERTO
    var jsonUserLogado = localStorage.getItem("UsuarioLogado")

    if(jsonUserLogado === null){
      localStorage.setItem("UsuarioLogado",arrayUsuarios[i].nome)
    }else{
      localStorage.removeItem("UsuarioLogado")
      localStorage.setItem("UsuarioLogado",arrayUsuarios[i].nome)
    }
    //AQUI TEM QUE REDIRECIONAR PARA A DASHBOARD, NAO SEI FAZER ISSO
    // <Link to="/dashboard"></Link>
  }



}
