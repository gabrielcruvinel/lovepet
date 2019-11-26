'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetImagemSchema extends Schema {
  up () {
    this.create('pet_imagem', (table) => {
      table.increments('id_pet_imagem')
      table
        .integer('id_pet')
        .unsigned()
        .references('id_pet')
        .inTable('pet')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamp('dt_inicio').defaultTo(this.fn.now()).notNullable()
      table.timestamp('dt_fim').defaultTo(null)
    })
  }

  down () {
    this.drop('pet_imagem')
  }
}

module.exports = PetImagemSchema
