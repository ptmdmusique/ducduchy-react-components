
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ducduchy-react-components.cjs.production.min.js')
} else {
  module.exports = require('./ducduchy-react-components.cjs.development.js')
}
