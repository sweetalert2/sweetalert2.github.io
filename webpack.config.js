const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', './js/main.js'],
  output: {
    filename: './js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    })
  ]
}
