const path = require('path')
const fs = require('fs')
const ConfigHtml = require('./webpack.config.html')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
        'css-loader?-autoprefixer',
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

// create an html file for each page
let PagesPlugins = []
fs.readdirSync(path.resolve(__dirname, 'src/pages')).forEach(filename => {
  if (filename.slice(-3) === 'jsx') {
    ConfigHtml.filename = filename.slice(0, -3) + 'html'
    PagesPlugins.push(new HtmlWebpackPlugin(ConfigHtml))
  }
})

module.exports = {
  target: 'web',
  entry: [
    './src/main/style',
    './src/main/renderer',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') 
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.html']
  },
  module: {
    rules: rules
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: process.env.NODE_ENV === 'development'
    })
  ].concat(PagesPlugins),
}
