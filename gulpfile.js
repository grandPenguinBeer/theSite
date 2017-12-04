var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');

gulp.task('default', function() {
  return gulp.src('./styles/**/*.less')
    .pipe(watch('./styles/**/*.less'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/styles'));
});