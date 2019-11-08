import React from 'react';
import { MdPets, MdFavoriteBorder, MdQuestionAnswer } from "react-icons/md";
import { Link } from 'react-router-dom'; //REDIRECIONA A PAGINA

import {Container, Preview, TxtPrincipal, PrincipalLogin, BtnCadastro, PrincipalInfo, InfoPrincipalRow } from './styles.js';

export default function Principal() {
  return (
    <Container>
      <Preview>
        <TxtPrincipal>
          <h1>Encontre um parceiro ideal para o seu bichinho agora mesmo</h1>
        </TxtPrincipal>

        <PrincipalInfo>
          <InfoPrincipalRow>
            <MdPets/>Cadastre seu pet
          </InfoPrincipalRow>
          <InfoPrincipalRow>
            <MdFavoriteBorder/>Encontre um parceiro ideal para seu bichinho
          </InfoPrincipalRow>
          <InfoPrincipalRow>
            <MdQuestionAnswer/>Converse com outros donos de pets
          </InfoPrincipalRow>
        </PrincipalInfo>
      </Preview>
      <PrincipalLogin>
          <h1>Entrar</h1>
          <form>
            <input type="email" placeholder="Digite seu email"></input>
            <input type="password" placeholder="Digite sua senha"></input>
            <button type="submit">Entrar</button>
          </form>

          <BtnCadastro>
            <Link to="/cadastro">Cadastrar</Link>
          </BtnCadastro>
      </PrincipalLogin>
    </Container>

      // <Row>
      //   <Col span={12} id="principal-infos-esquerdo">
      //     <h1>lovepet</h1>
      //     <Row>
      //       <Col id="col-txt-principal">
      //         <span class="txt-principal">
      //           <h1>A rede social perfeita para o seu animal</h1>
      //         </span>
      //       </Col>
      //       <Col id="principal-grid-info">
      //         <span class="text-principal-info">
      //           <Icon type="heart-o" /> Encontre um parceiro ideal para seu bichinho
      //         </span>
      //         <span class="text-principal-info">
      //           <Icon type="search" /> Encontre um par ideal
      //         </span>
      //         <span class="text-principal-info">
      //         <Icon type="message" /> Converse com outros donos de pets
      //         </span>
      //       </Col>
      //     </Row>
      //     <Row>
      //       <Col id="quem-somos">
      //         <Button type="primary" icon="question-circle-o">Quem somos</Button>
      //       </Col>
      //     </Row>
      //   </Col>


      //   <Col span={12} id="principal-info-direito">
          
      //     <Form layout="inline">
      //       <FormItem>
      //         <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
      //       </FormItem>
      //       <FormItem>
      //         <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Senha" />
      //       </FormItem>
      //       <FormItem>
      //         <Button type="primary" htmlType="submit" >Entrar</Button>
      //       </FormItem>
      //     </Form>

      //     <Row id="row-principal-direito">
      //       <Col span={24} id="title-principal-direito">
      //         <h1>Participe dessa comunidade agora</h1>
      //       </Col>
      //     </Row>
      //     <Row>
      //       <Col id="btn-cadastrar">
      //         <Button type="primary">Cadastrar agora</Button>
      //       </Col>
      //     </Row>
      //     <Row>

      //     </Row>
      //   </Col>
      // </Row>
  );
}
