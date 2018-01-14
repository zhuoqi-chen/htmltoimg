'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    if (!this.ctx.helper.isURL(this.ctx.params.url)) {
      this.ctx.body = 'Incorrect url param';
      return;
    }
    this.ctx.set('content-type', 'image/png');
    this.ctx.body = await this.service.htmltoimg.screenshot(this.ctx.params.url);
  }
}

module.exports = HomeController;
