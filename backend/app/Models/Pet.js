'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pet extends Model {
    static get table () {
        return  'pet';
<<<<<<< HEAD
=======
    }
    static get primaryKey () {
        return 'id_pet';
    }
    static get createdAtColumn() {
        return 'dt_inicio';
    }
    static get updatedAtColumn() {
        return 'dt_inicio';
>>>>>>> 6583f118791d4f995539c49767c1cad7c238df60
    }
    static get primaryKey () {
        return 'id_pet';
    }
    static get createdAtColumn() {
        return 'dt_inicio';
      }
  
    static get updatedAtColumn() {
        return 'dt_inicio';
    }

    usuario () {
        return this.belongsTo('App/Models/Usuario');
    }

    images() { 
        return this.hasMany('App/Models/PetImagem');
    }

}

module.exports = Pet
