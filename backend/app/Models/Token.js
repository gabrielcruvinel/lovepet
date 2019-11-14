'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Token extends Model {
    static get primaryKey() {
        return 'id_token';
    }
    static get createdAtColumn() {
        return 'dt_inicio';
    }
    static get updatedAtColumn() {
        return 'dt_inicio';
    }
}

module.exports = Token
