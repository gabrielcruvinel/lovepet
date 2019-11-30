import React from 'react';
import { 
  Container, 
  Left,
  Right,
  BoxMatch,
  CardMatch,
  FotoPetMatch,
  FooterMatch,
  Like,
  MaisInfo,
  Dislike,

  } from './styles';
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
          <BoxMatch>
          <CardMatch>
            <FotoPetMatch>
              TESTE DE FOTO
            </FotoPetMatch>
            <FooterMatch>
              <Like>Like</Like>
              <MaisInfo>Info</MaisInfo>
              <Dislike>Dislike</Dislike>
            </FooterMatch>
          </CardMatch>
          </BoxMatch>
        </Right>
  </Container>
  );
}
