'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PetTipo extends Model {
    static get table () {
        return 'pet_tipo';
      }
    static get primaryKey () {
        return 'id_pet_tipo';
    }
     
    static get createdAtColumn() {
      return 'dt_inicio';
    }

    static get updatedAtColumn() {
      return 'dt_inicio';
    }
}

module.exports = PetTipo
