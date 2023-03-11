const gulp = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefix = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const webpackStream = require('webpack-stream')

const styles = ['styles/styles.scss']

gulp.task('bundle', () => {
  return webpackStream({
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js?$/,
          // https://github.com/webpack/webpack/issues/2031#issuecomment-219040479
          exclude: /node_modules\/(?!(highlight.js|ANOTHER-ONE)\/).*/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: ['babel-plugin-preval'],
              },
            },
          ],
        },
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    // mode: 'development'
    mode: 'production',
  }).pipe(gulp.dest('dist/'))
})

gulp.task('sass', () => {
  return gulp.src(styles).pipe(sass()).pipe(autoprefix()).pipe(gulp.dest('styles'))
})

gulp.task('build', gulp.series('sass', 'bundle'))

gulp.task('default', gulp.series('sass'))

gulp.task('watch', () => {
  browserSync.init({
    port: 8081,
    notify: false,
    reloadOnRestart: true,
    https: false,
    server: ['./'],
  })

  gulp.watch(['src/**/*.js']).on('change', gulp.series('bundle'))

  gulp.watch(['index.html', 'js/bundle.js', 'styles/*.css']).on('change', browserSync.reload)

  gulp.watch(['styles/*.scss'], gulp.series('sass'))
})
