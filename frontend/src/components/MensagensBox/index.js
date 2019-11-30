import React from 'react';
import { Container, TituloMensagens } from './styles';
import Mensagens from '../../components/Mensagens/index'

export default function MensagensBox() {
  return (
    <Container>
        <TituloMensagens>
          <h2>Mensagens</h2>
        </TituloMensagens>
        <Mensagens/>
    </Container>
  );
}