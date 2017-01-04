const {HotModuleReplacementPlugin} = require('webpack')
const ConfigBase = require('./webpack.config.base')

ConfigBase.entry.unshift('preact/devtools')
ConfigBase.devServer = {
  contentBase: './dist/',
  hot: true,
  port: process.env.PORT || 8080,
  inline: true,
}
// disable extract-text-webpack-plugin
ConfigBase.plugins[0].options.disable = true
ConfigBase.plugins.push(new HotModuleReplacementPlugin())

module.exports = ConfigBase
