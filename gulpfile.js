const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefix = require('gulp-autoprefixer')
const sassLint = require('gulp-sass-lint')

gulp.task('sass', ['sass-lint'], (cb) => {
  gulp.src('styles/styles.scss')
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(gulp.dest('styles'))
})

gulp.task('sass-lint', () => {
  return gulp.src('styles/styles.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('default', ['sass'])

gulp.task('watch', () => {
  gulp.watch('styles/styles.scss', ['sass'])
})
