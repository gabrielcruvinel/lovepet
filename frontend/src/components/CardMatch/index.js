import React from 'react';
import ArrayToJson from '../../util/ArrayToJson'
import JsonToArray from '../../util/JsonToArray'
import { MdThumbUp, MdThumbDown, MdToc } from 'react-icons/md';
import { 
    Container,  
    FotoPetMatch,
    FooterMatch,
    Like,
    MaisInfo,
    Dislike
} from './styles';

var atualPetExibindo = null;
var sNome = ''
var sIdade = ''
var sAnos = ''

export default function CardMatch() {
    let petsMostrar = petsParaMostrar()
    if(petsMostrar === -1){
        atualPetExibindo = {}
        atualPetExibindo.nome = "Você nao possui nenhum pet cadastrado"
        atualPetExibindo.idade = ''
    }
    console.log(petsMostrar)
    console.log(atualPetExibindo)
    if(atualPetExibindo === null){
        atualPetExibindo = petsMostrar[0]
        sNome = "Nome: "
        sIdade = "Idade: "
        sAnos = "anos"
    }
    console.log(atualPetExibindo)


  return (
	<Container>
            <FotoPetMatch>
                TESTE DE FOTO
                <br/>
                <label id="nomePet">{sNome + atualPetExibindo.nome}</label>
                <br/>
                <label id="idadePet">{sIdade + atualPetExibindo.idade + sAnos}</label>
            </FotoPetMatch>
            <FooterMatch>
                <Dislike onClick={passaPetDislike}><MdThumbDown/></Dislike>
                <MaisInfo><MdToc/></MaisInfo>
                <Like onClick={passaPetLike}><MdThumbUp/></Like>
            </FooterMatch>
	</Container>
  );
}


//retorna um array com os pets a serem mostrados para o usuario logado
function petsParaMostrar(){
    const petsMostrar = []
    var usuarioLogado = localStorage.getItem('UsuarioLogado')
    var arrayUsuarios = JsonToArray(localStorage.getItem('Usuarios'))
    //lozaliza o indice do usuario cadastrado
    for(var i=0;i<arrayUsuarios.length;i++){
        if(arrayUsuarios[i].nome === usuarioLogado) break
    }
    var pets = JsonToArray(localStorage.getItem('Pets'))

    //coloca os pets de outros donos no array (nao verifica por especie)
    for(let j = 0;j<pets.length;j++){
        if (pets[j].dono !== arrayUsuarios[i].email){
            petsMostrar.push(pets[j])
        }
    }

	for(var k=0;k<pets.length;k++){
	    if(pets[k].dono === arrayUsuarios[i].email) return petsMostrar
	}
    return -1
}

//Passa para o proximo pet da lista
function passaPetLike(){
    let petsMostrar = petsParaMostrar()
    //Procura o indice do atualpet no array dos pets a serem mostrados
    for(var i = 0;i<petsMostrar.length;i++){
        if(petsMostrar[i].nome === atualPetExibindo.nome 
            && petsMostrar[i].dono === atualPetExibindo.dono) break
    }
    i++
    //se não estiver no final do array
    if(i<petsMostrar.length){
        //armazenar em algum lugar que deu like
        atualPetExibindo = petsMostrar[i]
        document.getElementById('nomePet').innerHTML = `Nome: ${atualPetExibindo.nome}`
        document.getElementById('idadePet').innerHTML = `Idade: ${atualPetExibindo.idade} anos`
    }else{
        document.getElementById('nomePet').innerHTML = `Sem mais pets`
        document.getElementById('idadePet').innerHTML = ``
    }
}

function passaPetDislike(){
    let petsMostrar = petsParaMostrar()
    //Procura o indice do atualpet no array dos pets a serem mostrados
    for(var i = 0;i<petsMostrar.length;i++){
        if(petsMostrar[i].nome === atualPetExibindo.nome 
            && petsMostrar[i].dono === atualPetExibindo.dono) break
    }
    i++
    //se não estiver no final do array
    if(i<petsMostrar.length){
        //Armazenar em algum lugar que deu deslike
        atualPetExibindo = petsMostrar[i]
        document.getElementById('nomePet').innerHTML = `Nome: ${atualPetExibindo.nome}`
        document.getElementById('idadePet').innerHTML = `Idade: ${atualPetExibindo.idade} anos`
    }else{
        document.getElementById('nomePet').innerHTML = `Sem mais pets`
        document.getElementById('idadePet').innerHTML = ``
    }
}