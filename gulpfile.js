var gulp = require('gulp');
var source = require("vinyl-source-stream");
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var paths = {
	HTML: 'src/index.html',
	MINIFIED_OUT: 'build.min.js',
	OUT: 'build.js',
  CSS_OUT: 'style.css',
	DEST: 'dist',
	DEST_BUILD: 'dist/build',
	DEST_SRC: 'dist/src',
  IMG_DEST_SRC: 'dist/src/images',
	ENTRY_POINT: 'src/js/home.js',
  clean: [
    "src/assets/stylesheets"
  ],
  images: "src/assets/images/*",
  css: "src/assets/stylesheets/**/*.scss",
  js: [
    "src/js/components/*.jsx", "src/js/components/**/*.jsx"
  ],
  readme: "README.md"
};

var errorLogger = function(err){
  gutil.log(err); 
  // end this stream
  this.emit('end');
}

// copies index HTML to DEST
gulp.task('copy-html', function(){
  return gulp.src(paths.HTML)
  .pipe(gulp.dest(paths.DEST));
});

gulp.task('copy-css', function(){
  return gulp.src(paths.css)
  .pipe(gulp.dest(paths.DEST_SRC));
});

gulp.task('copy-images', function(){
  return gulp.src(paths.images)
  .pipe(gulp.dest(paths.IMG_DEST_SRC));
});

gulp.task('scss:prefix:css', function () {
    var sass = require('gulp-sass');
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer-core');

    return gulp.src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(sass({ indentedSyntax: false, errLogToConsole: true }))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.DEST_SRC));
});

gulp.task('watch-css', function() {
  gulp.watch(paths.css, ['scss:prefix:css']);
});

gulp.task('watch-html', function() {
  gulp.watch(paths.HTML, ['copy-html']);
});

gulp.task('watch-images', function() {
  gulp.watch(paths.images, ['copy-images']);
});

// task to run to watch for changes in index.HTML or any JS file to update code
gulp.task('watch-jsx',function(){
  var watcher = watchify(browserify({
    entries: [paths.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update',function(){
    watcher.bundle()
      .on('error',errorLogger)
      .pipe(source(paths.OUT))
      .pipe(gulp.dest(paths.DEST_SRC))
      console.log('Updated');
  })
    .bundle()
    .on('error',errorLogger)
    .pipe(source(paths.OUT))
    .pipe(gulp.dest(paths.DEST_SRC));
});
gulp.task('copy',['copy-html','scss:prefix:css','copy-images']);
gulp.task('watch',['watch-jsx','watch-html','watch-css','watch-images']);
gulp.task('default',['copy','watch']);


