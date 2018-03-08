const webpack = require('webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

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
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new SWPrecacheWebpackPlugin({
      staticFileGlobs: [
        'styles/**/*.css',
        'js/bundle.js',
        'images/**/*'
      ],
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/unpkg\.com\/sweetalert2\@latest\/dist\/sweetalert2\.all\.js/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*\.css/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/unsplash\.it\/400\/200\/\?random/,
          handler: 'networkFirst'
        }
      ],
      minify: true
    })
  ]
}
