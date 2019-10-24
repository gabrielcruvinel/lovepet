'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pet extends Model {
    static get table () {
        return  'Pet'
    }
}

module.exports = Pet
