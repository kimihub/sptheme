const PAGE = process.env.PAGE || 'index'

module.exports = {
  title: 'Studio Némésis',
  filename: PAGE + '.html',
  template: './src/templates/' + PAGE,
  inject: true,
  hash: true,
  minify: {
    html5: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeAttributeQuotes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
  }
}
