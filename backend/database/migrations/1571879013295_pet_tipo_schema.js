'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetTipoSchema extends Schema {
  up () {
    this.create('pet_tipo', (table) => {
      table.increments('id_pet_tipo')
      table.string('especie_pet', 80).notNullable().defaultTo('Cachorro')
      table.string('raca_pet', 80).defaultTo(null)
      table.timestamp('dt_inicio').notNullable().defaultTo(this.fn.now())
      table.timestamp('dt_fim').defaultTo(null)
    })
  }

  down () {
    this.drop('pet_tipo')
  }
}

module.exports = PetTipoSchema
