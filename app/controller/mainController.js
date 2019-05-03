'use strict';

const Controller = require('egg').Controller;

class mainController extends Controller {
   
   async index(){
		const ctx = this.ctx;
		ctx.body='hi code';
   }
}

module.exports = mainController;

