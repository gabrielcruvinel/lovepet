'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PetTipo extends Model {
    static get table () {
<<<<<<< HEAD
        return 'pet_tipo';
      }
    static get primaryKey () {
        return 'id_pet_tipo';
    }
     
=======
        return 'pet_tipo'
      }

    static get primaryKey () {
      return 'id_pet_tipo';
    }
>>>>>>> 6583f118791d4f995539c49767c1cad7c238df60
    static get createdAtColumn() {
      return 'dt_inicio';
    }

    static get updatedAtColumn() {
      return 'dt_inicio';
    }
}

module.exports = PetTipo
