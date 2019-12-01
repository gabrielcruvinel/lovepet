import React from 'react';
import { 
  Container, 
  Left,
  Right,
  BoxMatch,
  } from './styles';
import CardUsuario from '../../components/CardUsuario';
import MensagensBox from '../../components/MensagensBox';
import FooterUsuario from '../../components/FooterUsuario';
import CardMatch from '../../components/CardMatch';

export default function Dashboard() {
    return (
        <Container>
            <Left>
                <CardUsuario/>
                <MensagensBox/>
                <FooterUsuario/>
            </Left>
        <Right>
          <BoxMatch>
            <CardMatch/>
          </BoxMatch>
        </Right>
  </Container>
  );
}
