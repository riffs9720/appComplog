'use strict'

const User = use('App/Models/User')

class LoginController {

    async autenticacao({ request, auth, response }){
        const { username, password } = request.all()
    
        const token = await auth.attempt(username, password)
    
        const user = await User.findBy('username', username)
    
        return user;
      }
}

module.exports = LoginController
