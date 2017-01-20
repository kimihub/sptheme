const {LoaderOptionsPlugin, optimize} = require('webpack')
const ConfigBase = require('./webpack.config.base')

ConfigBase.devtool = 'cheap-module-source-map'
ConfigBase.plugins = ConfigBase.plugins.concat([
  new LoaderOptionsPlugin({
    minimize: true
  }),
  new optimize.UglifyJsPlugin({
    sourceMap: true
  })
])

module.exports = ConfigBase
