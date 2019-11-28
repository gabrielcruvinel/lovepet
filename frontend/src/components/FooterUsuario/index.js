import React from 'react';
import { Container, Match, Mensagem, CadastroPet, IndexPet } from './styles';
import { MdFavorite, MdQuestionAnswer, MdAccountBox } from 'react-icons/md';
import { FaDog } from 'react-icons/fa';
export default function FooterUsuario() {
  return (
    <Container>
        <Match>
            <MdFavorite/>
        </Match>
        <Mensagem>
            <MdQuestionAnswer/>
        </Mensagem>
        <CadastroPet>
			<FaDog/>
        </CadastroPet>
        <IndexPet>
			<MdAccountBox/>
		</IndexPet>
    </Container>
  );
}
