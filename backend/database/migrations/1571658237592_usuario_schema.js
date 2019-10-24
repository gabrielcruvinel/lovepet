'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuario', (table) => {
      table.increments('id_usuario')
      table.string('nome', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('senha', 60).notNullable()
      table.date('dt_nascimento')
      table.timestamp('dt_inicio').defaultTo(this.fn.now()).notNullable()
      table.timestamp('dt_fim').defaultTo(null)
      table.timestamps()
    })
  }

  down () {
    this.drop('usuario')
  }
}

module.exports = UsuarioSchema
