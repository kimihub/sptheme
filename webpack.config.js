const path = require('path')
const webpack = require('webpack')
const TemplateConfig = require('./template.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const PAGE = process.env.PAGE || 'index'

const loaders = [
  { 
    test: /\.jsx?$/, 
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.(png|svg)$/i,
    loader: 'url-loader',
  },
  {
    test: /\.(gif|jpe?g)$/i,
    loader: 'file-loader?name=[name].[ext]?[hash]',
  },
  {
    test: /\.scss$/, 
    loader: ExtractTextPlugin.extract('style-loader', [
      'css-loader?-autoprefixer',
      'resolve-url-loader',
      'postcss-loader',
      'sass-loader',
    ])
  },
]

let config = {
  target: 'web',
  entry: [
    './src/skeleton/' + PAGE,
    './src/renderers/' + PAGE,
  ],
  output: {
    filename: PAGE + '.bundle.js',
    path: path.resolve(__dirname, 'dist') 
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.html']
  },
  module: {
    loaders: loaders
  }
}

if (process.env.NODE_ENV === 'development') {

  const PORT = process.env.PORT || 8080;
  config.entry.unshift('preact/devtools')
  config.devServer = {
    contentBase: './dist/',
    hot: true,
    port: PORT,
    inline: true,
  }
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(TemplateConfig),
    new ExtractTextPlugin('', {disable:true}),
  ] 

}

else {

  config.entry.unshift('babel-polyfill') // ES6 Promises for all browsers <= to IE11, FF27, Safari7, Chrome32, Opera19, Old mobiles)
  config.entry.unshift('whatwg-fetch') // Fetch API for all browsers <= EDGE 13, IE11, Safari10, FF38, Chrome40, Opera26, Mobile browsers
  config.devtool = 'cheap-module-source-map'
  config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$/,
        threshold: 10240,
        minRatio: 0.8
    }),
    new HtmlWebpackPlugin(TemplateConfig),
    new ExtractTextPlugin(PAGE + '.style.css'),
  ]

}

module.exports = config
