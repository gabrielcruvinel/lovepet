'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PetTipo extends Model {
    static get table () {
        return 'Pet_tipo'
      }
}

module.exports = PetTipo
