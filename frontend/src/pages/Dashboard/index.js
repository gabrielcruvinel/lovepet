import React from 'react';
import { Container, Left, Right } from './styles';
import CardUsuario from '../../components/CardUsuario';
import MensagensBox from '../../components/MensagensBox';
import FooterUsuario from '../../components/FooterUsuario';



export default function Dashboard() {
    return (
        <Container>
            <Left>
                <CardUsuario/>
                <MensagensBox/>
                <FooterUsuario/>
            </Left>
      <Right>
        <h1>Teste Direito</h1>
      </Right>
  </Container>
  );
}
