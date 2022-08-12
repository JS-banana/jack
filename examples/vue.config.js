const { alias } = require('../build/config')

module.exports = {
  configureWebpack: {
    resolve: {
      alias,
    },
  },
}
