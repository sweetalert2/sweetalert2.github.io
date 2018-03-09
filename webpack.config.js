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
        'images/**/*'
      ],
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst'
        },
        {
          urlPattern: '/styles/**/*.css',
          handler: 'networkFirst'
        },
        {
          urlPattern: '/js/bundle.js',
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/npm\/.*/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/unsplash\.it\/400\/200\/\?random/,
          handler: 'networkFirst'
        }
      ]
      // minify: true
    })
  ]
}
