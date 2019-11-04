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
            <Col>
              <Button type="primary">Cadastrar agora</Button>
            </Col>
          </Row>
        </Col>
      </Row>
  );
}
