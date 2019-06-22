const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefix = require('gulp-autoprefixer')
const stylelint = require('gulp-stylelint')
const browserSync = require('browser-sync').create()
const webpack = require('webpack')
const webpackStream = require('webpack-stream')

const styles = [
  'styles/styles.scss',
  'styles/buysellads.scss',
  'styles/carbon-ads.scss',
  'styles/native-js.scss'
]

gulp.task('bundle', () => {
  return webpackStream({
    entry: ['babel-polyfill', './src/native.js', './src/app.js'],
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          use: 'babel-loader'
        },
        {
          test: /\.css?$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
      })
    ],
    // mode: 'development'
    mode: 'production'
  })
    .pipe(gulp.dest('dist/'))
})

gulp.task('style-lint', () => {
  return gulp.src(styles)
    .pipe(stylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }))
})

gulp.task('sass', gulp.series('style-lint', () => {
  return gulp.src(styles)
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(gulp.dest('styles'))
}))

gulp.task('build', gulp.series('sass', 'bundle'))

gulp.task('default', gulp.series('sass'))

gulp.task('watch', () => {
  browserSync.init({
    port: 8080,
    notify: false,
    reloadOnRestart: true,
    https: false,
    server: ['./']
  })

  gulp.watch([
    'src/app.js'
  ]).on('change', gulp.series('bundle'))

  gulp.watch([
    'index.html',
    'js/bundle.js',
    'styles/*.css'
  ]).on('change', browserSync.reload)

  gulp.watch([
    'styles/*.scss'
  ], gulp.series('sass'))
})
