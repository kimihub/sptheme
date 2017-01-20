const path = require('path')
const fs = require('fs')
const ConfigHtml = require('./webpack.config.html')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PAGE = process.env.PAGE || 'index'

const rules = [
  { 
    test: /\.jsx?$/, 
    use: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.(png|svg)$/i,
    use: 'url-loader?limit=16000&name=[name].[ext]?[hash]'
  },
  {
    test: /\.(gif|jpe?g)$/i,
    use: 'file-loader?name=[name].[ext]?[hash]',
  },
  {
    test: /\.yml$/,
    use: [
      'json-loader',
      'yaml-loader',
    ]
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader', 
      loader: [
        'css-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
          query: {
            data: `$slideshow_num: ${fs.readdirSync(path.resolve(__dirname, 'src/datas/index/slideshow')).length};`
          }
        }
      ]
    })
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
    extensions: ['.json', '.js', '.jsx', '.scss', '.html', '.yml']
  },
  module: {
    rules: rules
  },
  plugins: [
    new ExtractTextPlugin({
      filename: PAGE + '.style.css',
      disable: process.env.NODE_ENV === 'development'
    }),
    new HtmlWebpackPlugin(ConfigHtml),
  ],
}
