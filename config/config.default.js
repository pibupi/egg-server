/* eslint valid-jsdoc: "off" */

'use strict'
const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611672104308_4745'

  // add your middleware config here
  config.middleware = ['httpLog']
  config.httpLog = {
    type: 'all'
  }
  config.security = {
    csrf: {
      enable: false
    }
  }
  config.view = {
    mapping: {
      '.html': 'ejs'
    },
    // root: path.join(appInfo.baseDir, 'app/html'),
    root: [
      path.join(appInfo.baseDir, 'app/html'),
      path.join(appInfo.baseDir, 'app/view')
    ].join(',')
  }
  config.ejs = {
    delimiter: '$'
  }
  config.static = {
    prefix: '/assets/',
    dir: path.join(appInfo.baseDir, 'app/assets')
  }
  config.session = {
    key: 'MUKE_SESS',
    httpOnly: true,
    maxAge: 1000 * 5,
    renew: true
  }
  config.auth = {
    exclude: ['/api/user/login', '/api/user/register']
  }
  config.mysql = {
    app: true, // 是否把mysql挂在到app下面
    agent: false, // 是否挂在到代理下面
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'mei@520225',
      database: 'egg'
    }
  }
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'mei@520225',
    database: 'egg_house',
    define: {
      timestamps: false, // 不需要sequelize自动添加时间
      freezeTableName: true // 使用原始的表名称，不让它额外处理
    }
  }
  config.jwt = {
    secret: 'zh'
  }
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: 'mei@520225',
      db: 0
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'zh',
    redisExpire: 60 * 60 * 24
  }

  return {
    ...config,
    ...userConfig
  }
}
