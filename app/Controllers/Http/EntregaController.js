'use strict'

const Entrega = use('App/Models/Entrega')

class EntregaController {


/**
   * Show a list of all entregas.
   * GET entregas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const entrega = await Entrega.all()

    return entrega
  }

  /**
   * Create/save a new entrega.
   * POST entregas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const entrega = await Entrega.create(data)

    return entrega
  }

  /**
   * Display a single entrega.
   * GET entregas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const entrega = await Entrega.find(params.id)

    return entrega
  }

  /**
   * Update entrega details.
   * PUT or PATCH entregas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.body
    const entrega = await Entrega.find(params.id)

    entrega.merge(data)

    await entrega.save()

    return entrega
  }

  /**
   * Delete a entrega with id.
   * DELETE entregas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const entrega = await Entrega.find(params.id)

    await entrega.delete()
  }


}

module.exports = EntregaController
