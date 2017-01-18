const {OccurrenceOrderPlugin, UglifyJsPlugin} = require('webpack').optimize
const ConfigBase = require('./webpack.config.base')

// Polyfills
ConfigBase.entry = [
  'es6-promise/auto', // ie < 12 && Old Mobile Browsers
  'whatwg-fetch' // ie < 14 && Safari < 11 && Old Mobile Browsers
].concat(ConfigBase.entry)
ConfigBase.devtool = 'cheap-module-source-map'
ConfigBase.plugins = ConfigBase.plugins.concat([
  new OccurrenceOrderPlugin(),
  new UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
])

module.exports = ConfigBase
