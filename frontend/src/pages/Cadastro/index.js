import React from 'react';

import { 
  BodyCadastro,
  SideElement,
  CenterElement,
  BtnCadastro,
  CampoPreencher
} from './styles.js';


export default function Cadastro() {
  return (
    <BodyCadastro>
      <SideElement></SideElement>
      <CenterElement>
        <h1>Criar sua conta</h1>
        <form>
          <CampoPreencher>
            <label>Nome</label>
            <Input placeholder="Digite seu nome"></Input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Email</label>
            <Input type="email" placeholder="Digite seu email"></Input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Data de Nascimento</label>
            <Input type="date" placeholder="DD/MM/YYYY"></Input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Senha</label>
            <Input type="password" placeholder="Digite sua senha"></Input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Confirme sua senha</label>
            <Input type="password" placeholder="Digite sua senha"></Input>
          </CampoPreencher>
          <BtnCadastro>
            <button type="submit">Cadastrar</button>
          </BtnCadastro>
        </form>
      </CenterElement>
      <SideElement></SideElement>
    </BodyCadastro>
  );
}





