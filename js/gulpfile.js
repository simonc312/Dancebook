var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('default', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./home.js');
  return b.bundle()
    .pipe(source('home.js'))
    .pipe(gulp.dest('./dist'));
});

