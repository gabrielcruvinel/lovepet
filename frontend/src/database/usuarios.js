//Array com os usuários cadastrados no sistema

import usuario from '../database/usuarioObject'

const Usuarios = []

var user1 = new usuario()
user1.nome="Victor"
user1.email="victor@gmail.com"
user1.senha="123"

var user2 = new usuario()
user2.nome="Gabriel"
user2.email="gabriel@gmail.com"
user2.senha="123"

var user3 = new usuario()
user3.nome="Raphael"
user3.email="raphael@gmail.com"
user3.senha="123"

Usuarios.push(user1)
Usuarios.push(user2)
Usuarios.push(user3)

export default Usuarios;
