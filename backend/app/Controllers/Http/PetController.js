'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pets
 */
class PetController {

  async index ({ request, response, view }) {
    //LISTA TODOS OS PETS
    const pets = await Pet.all();

    return pets;
  }

 
  async store ({ request, auth}) {
    //CRIA UM PET
    const data = request.only(['nome', 'sexo', 'idade']);
    const pet = await Pet.create({ user_id: auth.user_id, ... data });

    return pet;
  }


  async show ({ params }) {
    //MOSTRA APENAS O PET DAQUELE ID
    const pet = await Pet.findOrFail(params.id);

    return pet;
  }

  async update ({ params, auth, request }) {
    const pet = await Pet.findOrFail(params.id);
    const data = request.only(['nome', 'sexo', 'idade']);

    //VERIFICA SE O USUARIO QUE ESTÁ LOGADO É O MESMO DO DONO DO PET 
    if(pet.user_id !=  auth.user_id) {
      return Response.status(401);
    }
    
    pet.merge(data);
    await pet.save();

    return pet;
  }

  
  async destroy ({ params, auth }) {
    const pet = await Pet.findOrFail(params.id);

    //VERIFICA SE O USUARIO QUE ESTÁ LOGADO É O MESMO DO DONO DO PET 
    if(pet.user_id != auth.user_id) {
      return Response.status(401);

    }

    await pet.delete();
  }
}

module.exports = PetController
