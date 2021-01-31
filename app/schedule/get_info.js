'use strict'

const Subscription = require('egg').Subscription

class getInfo extends Subscription {
  static get schedule() {
    return {
      // interval: 3000,
      cron: '*/3 * * * * *',
      type: 'worker' // 'worker'
    }
  }

  async subscribe() {
    // console.log(this)
    // const info = this.ctx.info
    // console.log(this.ctx)
    // console.log(Date.now(), info)
  }
}
module.exports = getInfo
