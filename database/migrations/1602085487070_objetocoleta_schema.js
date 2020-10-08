'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObjetocoletaSchema extends Schema {
  up () {
    this.create('objetocoletas', (table) => {
      table.string('volume')
      table.string('pedido')
      table.string('endereco')
      table.string('complemento')
      table.string('bairro')
      table.string('cep')
      table.string('telefone')
      table.string('obs')
      table.string('remessa')
      table.increment()
      table.timestamps()
    })
  }

  down () {
    this.drop('objetocoletas')
  }
}

module.exports = ObjetocoletaSchema
