const {HotModuleReplacementPlugin} = require('webpack')
const ConfigBase = require('./webpack.config.base')

ConfigBase.entry.unshift('preact/devtools')
ConfigBase.devServer = {
  contentBase: './dev/',
  hot: true,
  port: process.env.PORT || null,
  inline: true,
}
ConfigBase.plugins.push(new HotModuleReplacementPlugin())

module.exports = ConfigBase
