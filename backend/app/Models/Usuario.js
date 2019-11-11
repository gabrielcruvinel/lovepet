'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {
    static get table () {
        return 'usuario';
      }

    static get primaryKey () {
      return 'id_usuario';
    }
    static get createdAtColumn() {
      return 'dt_inicio';
    }

    static get updatedAtColumn() {
      return 'dt_inicio';
    }
}

module.exports = Usuario
