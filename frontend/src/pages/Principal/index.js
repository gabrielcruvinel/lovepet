import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdPets, MdFavoriteBorder, MdQuestionAnswer, MdInfoOutline } from "react-icons/md";
import { Link } from 'react-router-dom'; //REDIRECIONA A PAGINA
import * as Yup from 'yup';

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

const schema = Yup.object().shape({

  email: Yup.string()
  .email('Digite um email válido')
  .required('Digite um email'),

  password: Yup.string()
  .required('É preciso digitar uma senha'),

});

export default function Principal() {

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
            <Input name="email" type="email" placeholder="Digite seu email"></Input>
            <Input name="password" type="password" placeholder="Digite sua senha"></Input>
            <button type="submit">Entrar</button>
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



// function logar(){
//   var email = document.getElementsByName('email').value
//   var senha = document.getElementsByName('password').value
//   var i=0;
//   if(email !== ""){
//     while(Usuarios[i].email !== email && i<Usuarios.length){
//       i++
//     }
//     if(i<Usuarios.length){
//       if(Usuarios[i].senha === senha){
//         window.location.assign("/dashboard");
//       }
//     }
//   }
// }
