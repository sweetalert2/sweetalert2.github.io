const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefix = require('gulp-autoprefixer')
const sassLint = require('gulp-sass-lint')
const browserSync = require('browser-sync').create()

gulp.task('sass', ['sass-lint'], (cb) => {
  return gulp.src([
    'styles/styles.scss',
    'styles/carbon-ads.scss'
  ])
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(gulp.dest('styles'))
})

gulp.task('sass-lint', () => {
  return gulp.src([
    'styles/styles.scss',
    'styles/carbon-ads.scss'
  ])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('default', ['sass'])

gulp.task('watch', () => {
  browserSync.init({
    port: 8080,
    notify: false,
    reloadOnRestart: true,
    https: false,
    server: ['./']
  })

  gulp.watch([
    'index.html',
    'styles/*.css'
  ]).on('change', browserSync.reload)

  gulp.watch([
    'styles/*.scss',
  ], ['sass'])
})
