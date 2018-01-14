'use strict';
const Controller = require('egg').Controller;
const puppeteer = require('puppeteer');
class HomeController extends Controller {
  async index() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    await page.screenshot({ path: './screenshot/baidu.png' });
    await browser.close();
    this.ctx.body = 'htmltoimg down';
  }
}

module.exports = HomeController;
