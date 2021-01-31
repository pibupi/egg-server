'use strict'
const Service = require('egg').Service
class BaseService extends Service {
  async run(callback) {
    const { ctx, app } = this
    try {
      if (callback) {
        return callback(ctx, app)
      }
    } catch (e) {
      console.log(e)
      return null
    }
  }
}
module.exports = BaseService
