'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Usuario extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.senha) {
        userInstance.senha = await Hash.make(userInstance.senha)
      }
    })
  }

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
