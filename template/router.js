'use strict'


let demo = require('./routes/demo')


module.exports = [
  ['/', demo.index],
  ['/sleep', 'get,post', demo.sleep]
]