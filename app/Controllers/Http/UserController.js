'use strict'

const User = use('App/Models/User')

class UserController {

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
    const user = await User.create(data)

    return user
  }
    
}

module.exports = UserController
