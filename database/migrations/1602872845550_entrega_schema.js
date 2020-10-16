'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntregaSchema extends Schema {
  up () {
    this.create('entregas', (table) => {
      table.string('destinatario')
      table.string('endereco')
      table.string('complemento')
      table.string('bairro')
      table.string('cidade')
      table.string('cep')
      table.boolean('estatusEntrega')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('entregas')
  }
}

module.exports = EntregaSchema
