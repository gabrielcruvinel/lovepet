import React from 'react';

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
            <input placeholder="Digite seu nome"></input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email"></input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Data de Nascimento</label>
            <input type="date" placeholder="DD/MM/YYYY"></input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha"></input>
          </CampoPreencher>
          <CampoPreencher>
            <label>Confirme sua senha</label>
            <input type="password" placeholder="Digite sua senha"></input>
          </CampoPreencher>
          <BtnCadastro>
            <button type="submit">Cadastrar</button>
          </BtnCadastro>
        </form>
      </CadastroElement>
    </BodyCadastro>
  );
}