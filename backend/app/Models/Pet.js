'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pet extends Model {
    static get table () {
        return  'pet';
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
