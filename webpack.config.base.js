const path = require('path')
const fs = require('fs')
const ConfigHtml = require('./webpack.config.html')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PAGE = process.env.PAGE || 'index'

const loaders = [
  { 
    test: /\.jsx?$/, 
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.(png|svg)$/i,
    loader: 'url-loader?limit=25000&name=[name].[ext]?[hash]'
  },
  {
    test: /\.(gif|jpe?g)$/i,
    loader: 'file-loader?name=[name].[ext]?[hash]',
  },
  {
    test: /\.yml$/,
    loaders: [
      'json-loader',
      'yaml-loader',
    ]
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

module.exports = {
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
    extensions: ['', '.json', '.js', '.jsx', '.scss', '.html', '.yml']
  },
  module: {
    loaders: loaders
  },
  plugins: [
    new ExtractTextPlugin(PAGE + '.style.css'),
    new HtmlWebpackPlugin(ConfigHtml),
  ],
  sassLoader: {
    data: `$slideshow_num: ${fs.readdirSync(path.resolve(__dirname, 'src/datas/index/slideshow')).length};`
  }
}
