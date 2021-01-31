'use strict'
const dayjs = require('dayjs')

module.exports = {
  base64Encode(str = '') {
    return Buffer(str).toString('base64')
  },
  time() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss')
  },
  // * 时间戳
  timestamp(data) {
    return new Date(data).getTime()
  },
  // * 过滤掉无用的属性
  upPick(source, arr) {
    if (Array.isArray(arr)) {
      const obj = {}
      for (const i in source) {
        if (!arr.includes(i)) {
          obj[i] = source[i]
        }
      }
      return obj
    }
  }
}
