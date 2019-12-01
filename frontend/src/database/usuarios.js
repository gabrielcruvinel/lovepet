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

var user4 = new usuario()
user4.nome="Osmar"
user4.email="osmar@gmail.com"
user4.senha="123"

var user5 = new usuario()
user5.nome="Pedro"
user5.email="pedro@gmail.com"
user5.senha="123"

var user6 = new usuario()
user6.nome="Marcelo"
user6.email="marcelo@gmail.com"
user6.senha="123"

var user7 = new usuario()
user7.nome="Francisco"
user7.email="francisco@gmail.com"
user7.senha="123"

var user8 = new usuario()
user8.nome="Paulo"
user8.email="paulo@gmail.com"
user8.senha="123"

var user9 = new usuario()
user9.nome="Ricardo"
user9.email="ricardo@gmail.com"
user9.senha="123"

var user10 = new usuario()
user10.nome="Joao"
user10.email="joao@gmail.com"
user10.senha="123"


Usuarios.push(user1)
Usuarios.push(user2)
Usuarios.push(user3)
Usuarios.push(user4)
Usuarios.push(user5)
Usuarios.push(user6)
Usuarios.push(user7)
Usuarios.push(user8)
Usuarios.push(user9)
Usuarios.push(user10)

export default Usuarios;
