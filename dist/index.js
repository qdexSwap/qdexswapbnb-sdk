
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bnbsdk.cjs.production.min.js')
} else {
  module.exports = require('./bnbsdk.cjs.development.js')
}
