'use strict'
const BaseController = require('./base')
class CommonController extends BaseController {
  async citys() {
    const { app } = this
    try {
      const result = await app.httpclient.request(
        'https://apis.imooc.com/?icode=89773B5DA84CA283',
        {
          dataType: 'json'
        }
      )
      console.log(result)
      if (result.status === 200) {
        this.success(result.data.citys)
      } else {
        this.error('获取城市服务失败')
      }
    } catch (e) {
      this.error('获取城市服务失败')
    }
  }
}
module.exports = CommonController
