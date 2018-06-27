'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // get
    const user = await this.app.mysql.get('users', { id: 1 });
    this.ctx.body = { user, request_time: Date.now() };
  }
}

module.exports = HomeController;
