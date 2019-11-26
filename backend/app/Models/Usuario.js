'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
// const Hash = use('Hash')


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

    pets () {
      return this.hasMany('App/Models/Pet')
    }

    images () { 
      return this.hasOne('App/Models/UsuarioImagem');
  }
}

module.exports = Usuario
