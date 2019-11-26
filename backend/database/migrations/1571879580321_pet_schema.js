'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetSchema extends Schema {
  up () {
    this.create('pet', (table) => {
      table.increments('id_pet')
      table
      .integer('id_usuario')
      .unsigned()
      .notNullable()
      .references('id_usuario')
      .inTable('usuario')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table
      .integer('id_pet_tipo')
      .unsigned()
      .notNullable()
      .references('id_pet_tipo')
      .inTable('pet_tipo')

      table.string('nome', 40).notNullable()
      table.string('sexo', 20)
      table.integer('idade')
      table.timestamp('dt_inicio').notNullable().defaultTo(this.fn.now())
      table.timestamp('dt_fim').notNullable().defaultTo(null)
    })
  }

  down () {
    this.drop('pet')
  }
}

module.exports = PetSchema
