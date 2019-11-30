import React from 'react';
import mensagensTodos from '../../database/mensagens'


//Cria o component com as mensagens do usuário logado
export default function Mensagens(){
    let usuarioLogado = localStorage.getItem("UsuarioLogado")
    let msg = 'mensagens'+usuarioLogado 
    let keys = Object.keys(mensagensTodos[msg]) //Para pegar as chaves das mensagens do usuário logado
    let divs = []
    //Caso o Usuario nao tenha mensagens
    if(keys === []){
      divs[0] = <div>
        Sem mensagens
      </div>
      return divs
    }

    //Pega todas as mensagens do usuário e cria divs com o conteúdo delas, retornando depois um array com as divs
    for(let i=0;i<keys.length;i++){
      divs[i]= <div>
        <div>
          <h1>Mensagem de {mensagensTodos[msg][keys[i]].from}</h1>
        </div>
        <div>
          <h2>{mensagensTodos[msg][keys[i]].content}</h2>
        </div>
      </div>
    }
    return divs
  }