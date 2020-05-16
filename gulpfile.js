'use strict';
var gulp = require('gulp')
var sass = require('gulp-sass')

var sassType = 'sass'
var styleSrc = './**/*.' + sassType
var styleDest = './'
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(styleSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(styleDest));
});
 
gulp.task('watch', function () {
  gulp.watch(styleSrc, gulp.series('sass'));
});