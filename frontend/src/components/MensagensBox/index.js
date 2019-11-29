import React from 'react';
import { Container } from './styles';
import Mensagens from '../../components/Mensagens/index'

export default function MensagensBox() {
  return (
    <Container>
        <h1>Mensagens</h1>
        <Mensagens/>
    </Container>
  );
}