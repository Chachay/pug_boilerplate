const gulp = require('gulp')
const pug = require('gulp-pug')
const inlineSource = require('gulp-inline-source')
const inlineImages = require('gulp-inline-images')
const { mathjaxify } = require('gulp-mathjaxify')

gulp.task('pug', () => {
  return gulp.src(['./src/*.pug', './src/**/*.pug', '!./_**/*', '!./node_modules/**/*'])
    .pipe(pug({ pretty: true }))
    .pipe(mathjaxify({ output: 'html' }))
    .pipe(inlineSource())
    .pipe(inlineImages({ basedir: './img/' }))
    .pipe(gulp.dest('./dest/'))
})
gulp.task('watch', () => {
  return gulp.watch(['./src/*.pug', './src/**/*.pug', './_template/*.pug', './_private/*.pug'], gulp.series(['pug']))
})
gulp.task('default', () => {
  return gulp.parallel(['pug'])
})
