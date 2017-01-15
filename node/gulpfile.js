'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
  return gulp
    .src('../www/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('../www/dist'))
});


