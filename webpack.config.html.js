module.exports = {
  title: 'Studio Némésis',
  template: './src/main/template',
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
