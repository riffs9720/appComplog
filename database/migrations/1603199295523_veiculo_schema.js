'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VeiculoSchema extends Schema {
  up () {
    this.create('veiculos', (table) => {
      table.string('placa')
      table.integer('valorLimiteDeCarga')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('veiculos')
  }
}

module.exports = VeiculoSchema
