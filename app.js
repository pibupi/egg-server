'use strict'
// 将session保存在了缓存中，
// 这样浏览器的cookie中的session的大小始终是73
module.exports = app => {
  const store = {}
  app.sessionStore = {
    async get(key) {
      console.log('store---', store)
      return store[key]
    },
    async set(key, value, maxAge) {
      store[key] = value
    },
    async destroy(key) {
      store[key] = null
    }
  }
  app.config.coreMiddleware.push('notFound')
  app.config.coreMiddleware.push('auth')
}
