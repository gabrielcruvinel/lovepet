'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsuarioImagem extends Model {
    static get table () {
        return 'usuario_imagem';
    }
    static get primaryKey() {
        return 'id_usuario_imagem';
    }
    static get createdAtColumn() {
        return 'dt_inicio';
    }
    static get updatedAtColumn() {
        return 'dt_inicio';
    } 
}

module.exports = UsuarioImagem
