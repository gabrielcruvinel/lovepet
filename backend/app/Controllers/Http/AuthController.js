'use strict'
const User = use('App/Models/Usuario');
const Token = use('App/Models/Token');
const Hash = use('Hash');

class AuthController {
    async register({ request, response }) {
        const data = request.only(["nome", "email", "senha"]);
        const { nome, email, senha } = data;

        const existeEmail = await User.findBy('email', email);
        if(existeEmail){
            return response.send({
              mensagem:  "Email já existente"
            })
        }

        if(!nome){
          return response.send({
            mensagem: "É necessario preencher um nome"
          })
          
        }

         
        const user = await User.create(data);
        return user;
      }
    
      async authenticate({ request, response, auth }) {
        const { email, senha } = request.all();
    
        //PROCURA USUARIO PELO EMAIL
        const usuario = await User.findBy('email', email);

        //Verifica se a senha enviada é valida
        const senhaValida = await Hash.verify(senha, usuario.senha)

        if(!senhaValida) {
          return response.send({
            mensagem: "Senha invalida",

          })
        }

        //GERA O TOKEN DO USUARIO
        const token = await auth.attempt(email, senha);

        //OBJETO DE GRAVAR TOKEN 
        const dataToken = {
          usuario_id: usuario.id_usuario,
          type: token.type,
          token: token.token
        }

        //ESPERA GRAVAR O TOKEN
        const gravarToken = await Token.create(dataToken);
      
        return response.send({
          usuario,
          token,
        });
      }
}

module.exports = AuthController
