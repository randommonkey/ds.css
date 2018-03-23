const autoprefixer = require('gulp-autoprefixer')
const gulp = require('gulp')
const pump = require('pump')
const sass = require('gulp-sass')

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

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass'])
})

gulp.task('default', ['sass'])
