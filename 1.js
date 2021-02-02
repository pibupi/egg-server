'use strict'
const arr = '{"value":1,"operator":"in"}:bbb'
const arr2 = ':未定义'

let result = ''
const reg = /\{(.+?)\}/g
const reg2 = /\}(\S*)/
// let reg = /(.+?)\}$/g
function parse(arr) {
  let temp, temp2
  if (reg.test(arr)) {
    temp = JSON.parse(arr.match(reg)[0])
    temp2 = arr.match(reg2)[1]
  } else {
    temp = arr
  }
  // temp = reg.test(arr) ? JSON.parse(arr.match(reg)[0]) : arr
  result =
    Object.prototype.toString.call(temp).slice(8, -1) === 'Object'
      ? `${temp.operator} ${temp.value} ${temp2}`
      : temp
  console.log(result)
}
parse(arr)
