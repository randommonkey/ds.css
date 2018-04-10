const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const gulp = require('gulp')
const pump = require('pump')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')

gulp.task('sass', function (cb) {
  pump([
    gulp.src('./src/sass/ds.scss'),
    sass({
      outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded'
    }),
    autoprefixer(),
    gulp.dest('./dist/')
  ], cb)
})

gulp.task('js', function (cb) {
  pump([
    gulp.src('./src/js/ds.js'),
    babel(),
    uglify(),
    gulp.dest('./dist/')
  ], cb)
})

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass'])
  gulp.watch('./src/js/*.js', ['js'])
})

gulp.task('default', ['sass', 'js'])
