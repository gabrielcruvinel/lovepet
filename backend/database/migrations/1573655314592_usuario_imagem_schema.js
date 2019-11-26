'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioImagemSchema extends Schema {
  up () {
    this.create('usuario_imagem', (table) => {
      table.increments('id_usuario_imagem')
      table
        .integer('id_usuario')
        .unsigned()
        .references('id_usuario')
        .inTable('usuario')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamp('dt_inicio').defaultTo(this.fn.now()).notNullable()
      table.timestamp('dt_fim').defaultTo(null)
    })
  }

  down () {
    this.drop('usuario_imagem')
  }
}

module.exports = UsuarioImagemSchema
