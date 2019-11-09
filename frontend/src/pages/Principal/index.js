import React from 'react';
import { MdPets, MdFavoriteBorder, MdQuestionAnswer, MdInfoOutline } from "react-icons/md";
import { Link } from 'react-router-dom'; //REDIRECIONA A PAGINA
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

export default function Principal() {
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
      <PrincipalLogin>
          <h1>Entrar</h1>
          <form>
            <input type="email" placeholder="Digite seu email"></input>
            <input type="password" placeholder="Digite sua senha"></input>
            <button type="submit">Entrar</button>
          </form>
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