'use strict'

const Veiculo = use('App/Models/Veiculo')
const Database = use('Database')

class VeiculoController {


    /**
   * Show a list of all veiculos.
   * GET veiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const veiculo = await Veiculo.all()

    return veiculo
  }

  /**
   * Create/save a new veiculo.
   * POST veiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const veiculo = await Veiculo.create(data)

    return veiculo
  }

  /**
   * Display a single veiculo.
   * GET veiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const veiculo = await Database
    .from('veiculo')
    .where({placa: params.id})

    return veiculo
  }

  /**
   * Update veiculo details.
   * PUT or PATCH veiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.body
    const veiculo = await Veiculo.find(params.id)

    veiculo.merge(data)

    await veiculo.save()

    return veiculo
  }

  /**
   * Delete a veiculo with id.
   * DELETE veiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const veiculo = await Veiculo.find(params.id)

    await veiculo.delete()
  }

}

module.exports = VeiculoController
