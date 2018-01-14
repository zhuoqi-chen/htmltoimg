'use strict';
const Service = require('egg').Service;
const puppeteer = require('puppeteer');
class HtmlToImg extends Service {
  /**
   * take a screenshot
   * @param {String} url Website url
   * @return {IMG} img buffer
   */
  async screenshot(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const result = await page.screenshot();
    await browser.close();
    return result;
  }
}

module.exports = HtmlToImg;
