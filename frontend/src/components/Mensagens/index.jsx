import React from 'react';
import mensagensTodos from '../../database/mensagens'
import { Container, EmissorName, EmissorMensagem } from './styles';

//Cria o component com as mensagens do usuário logado
export default function Mensagens(){
    let usuarioLogado = localStorage.getItem("UsuarioLogado")
    let msg = 'mensagens'+usuarioLogado 
    let divs = []
    //Caso o Usuario nao tenha mensagens
    if(mensagensTodos[msg]===null || mensagensTodos[msg] == undefined){
      divs[0] = <div>
        Sem mensagens
      </div>
      return divs
    }
    let keys = Object.keys(mensagensTodos[msg]) //Para pegar as chaves das mensagens do usuário logado

    
    //Pega todas as mensagens do usuário e cria divs com o conteúdo delas, retornando depois um array com as divs
    for(let i=0;i<keys.length;i++){
      divs[i]= 
            <Container>
             <EmissorName>
              <h3>Mensagem de <b>{mensagensTodos[msg][keys[i]].from}</b></h3>
             </EmissorName>
                
              <EmissorMensagem>
                <p><i>{mensagensTodos[msg][keys[i]].content}</i></p>
              </EmissorMensagem>
            </Container>
    }
    return divs
  }