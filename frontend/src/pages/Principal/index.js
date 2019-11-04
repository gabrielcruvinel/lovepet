import React from 'react';
import './style.css';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
import './style.css';
// import { Container } from './styles';

export default function Principal() {
  const FormItem = Form.Item;

  return (
      <Row>
        <Col span={12} id="principal-infos-esquerdo">
          <h1>lovepet</h1>
          <Row>
            <Col id="col-txt-principal">
              <span class="txt-principal">
                <h1>A rede social perfeita para o seu animal</h1>
              </span>
            </Col>
            <Col id="principal-grid-info">
              <span class="text-principal-info">
                <Icon type="heart-o" /> Encontre um parceiro ideal para seu bichinho
              </span>
              <span class="text-principal-info">
                <Icon type="search" /> Encontre um par ideal
              </span>
              <span class="text-principal-info">
              <Icon type="message" /> Converse com outros donos de pets
              </span>
            </Col>
          </Row>
          <Row>
            <Col id="quem-somos">
              <Button type="primary" icon="question-circle-o">Quem somos</Button>
            </Col>
          </Row>
        </Col>


        <Col span={12} id="principal-info-direito">
          
          <Form layout="inline">
            <FormItem>
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Senha" />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" >Entrar</Button>
            </FormItem>
          </Form>

          <Row id="row-principal-direito">
            <Col span={24} id="title-principal-direito">
              <h1>Participe dessa comunidade agora</h1>
            </Col>
          </Row>
          <Row>
            <Col id="btn-cadastrar">
              <Button type="primary">Cadastrar agora</Button>
            </Col>
          </Row>
          <Row>

          </Row>
        </Col>
      </Row>
  );
}
