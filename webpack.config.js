const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PAGE = process.env.PAGE || 'index'

let config = {
  target: 'web',
  entry: [
    './src/skeleton/' + PAGE,
    './src/renderers/' + PAGE
  ],
  output: {
    filename: PAGE + '.bundle.js',
    path: path.resolve(__dirname, 'build') 
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.html']
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loader: 'babel-loader', 
        query: { 
          presets: ['es2015', 'stage-0'], 
          plugins: [ ['transform-react-jsx', { 'pragma':'h' }] ] 
        } 
      },
      {
        test: /\.(png|svg)$/i,
        loader: 'url-loader'
      },
      {
        test: /\.(gif|jpe?g)$/i,
        loader: 'file-loader?name=[name].[ext]?[sha512:hash:base64:7]'
      },
    ]
  }
}

if (process.env.NODE_ENV === 'development') {

  const PORT = process.env.PORT || 8080;

  config.entry.unshift('preact/devtools')
  config.output.publicPath = `http://localhost:${PORT}/`
  config.devtool = 'inline-source-map'
  config.devServer =  {
    contentBase: './',
    hot: true,
    inline: true,
    port: PORT,
    progress: true
  }

  config.module.loaders.push({ 
    test: /\.scss$/, 
    loaders: [
      'style-loader', 
      'css-loader',
      'resolve-url-loader',
      'sass-loader',
    ]
  })

  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      filename: PAGE + '.html',
      template: './src/templates/' + PAGE,
      inject: true,
    }),
  ] 

}

else {

  config.entry.unshift('babel-polyfill') // ES6 Promises for all browsers <= to IE11, FF27, Safari7, Chrome32, Opera19, Old mobiles)
  config.entry.unshift('whatwg-fetch') // Fetch API for all browsers <= EDGE 13, IE11, Safari10, FF38, Chrome40, Opera26, Mobile browsers

  config.output.publicPath = '/build/'
  config.devtool = 'cheap-source-map'

  config.module.loaders.push({ 
    test: /\.scss$/, 
    loader: ExtractTextPlugin.extract([
      'css-loader?-autoprefixer',
      'resolve-url-loader',
      'postcss-loader',
      'sass-loader',
    ])
  })

  config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: '../' + PAGE + '.html',
      template: './src/templates/' + PAGE,
      inject: true,
      hash: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      }
    }),
    new ExtractTextPlugin(PAGE + '.style.css'),
  ]

}

module.exports = config
