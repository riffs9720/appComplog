'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

import Url from 'url-parse';

const DATABASE_URL = new Url(Env.get('DATABASE_URL'));

export const connection = Env.get('DB_CONNECTION', 'pg');

export const pg = {
  client: 'pg',
  connection: {
    host: Env.get('DB_HOST', DATABASE_URL.hostname),
    port: Env.get('DB_PORT', DATABASE_URL.port),
    user: Env.get('DB_USER', DATABASE_URL.username),
    password: Env.get('DB_PASSWORD', DATABASE_URL.password),
    database: Env.get('DB_DATABASE', DATABASE_URL.pathname.substr(1))
  }
};
