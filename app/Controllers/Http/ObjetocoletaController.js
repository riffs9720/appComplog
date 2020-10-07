'use strict'

const ObjetoColeta = use('App/Models/Objetocoleta')
const Database = use('Database')

class ObjetocoletaController {
    /**
   * Display a single player.
   * GET players/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const objeto = await Database.from('objetocoletas').where({ volume: params.id })

    return objeto
  }

    /**
   * Create/save a new player.
   * POST players
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const objeto = await ObjetoColeta.create(data)

    return objeto
  }
}


module.exports = ObjetocoletaController
