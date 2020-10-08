'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AbcSchema extends Schema {
  up () {
    this.create('abcs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('abcs')
  }
}

module.exports = AbcSchema
