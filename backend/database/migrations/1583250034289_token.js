'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('tokens', (table) => {
      table.increments('id_token')
      table
        .integer('usuario_id')
        .unsigned()
        .references('id_usuario')
        .inTable('usuario')
      table.string('token', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamp('dt_inicio').defaultTo(this.fn.now())
      table.timestamp('dt_fim').defaultTo(null)
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokensSchema
