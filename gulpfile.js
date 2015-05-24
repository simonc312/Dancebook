var gulp = require('gulp');
var source = require("vinyl-source-stream");
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
//var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
var paths = {
	HTML: 'src/index.html',
	MINIFIED_OUT: 'build.min.js',
	OUT: 'build.js',
  CSS_OUT: 'style.css',
	DEST: 'dist',
	DEST_BUILD: 'dist/build',
	DEST_SRC: 'dist/src',
	ENTRY_POINT: 'src/js/home.js',
  clean: [
    "src/assets/stylesheets"
  ],
  css: "src/assets/stylesheets/**/*.css",
  js: [
    "src/js/components/*.jsx", "src/js/components/**/*.jsx"
  ],
  readme: "README.md"
};

//runs into errors on my computer locally
/*gulp.task('compile-scss', function() {
  gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(sass({ indentedSyntax: false, errLogToConsole: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.DEST_SRC+'/assets/stylesheets'));
});*/

// copies index HTML to DEST
gulp.task('copy-html', function(){
  return gulp.src(paths.HTML)
  .pipe(gulp.dest(paths.DEST));
});

gulp.task('copy-css', function(){
  return gulp.src(paths.css)
  .pipe(gulp.dest(paths.DEST_SRC));
});

/*gulp.task('watch-scss', function() {
  gulp.watch(paths.css, ['compile-scss']);
});*/

// task to run to watch for changes in index.HTML or any JS file to update code
gulp.task('watch',function(){
  gulp.watch(paths.HTML, ['copy-html']);
  gulp.watch(paths.css, ['copy-css']);
  var watcher = watchify(browserify({
    entries: [paths.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update',function(){
    watcher.bundle()
      .pipe(source(paths.OUT))
      .pipe(gulp.dest(paths.DEST_SRC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(paths.OUT))
    .pipe(gulp.dest(paths.DEST_SRC));
});

gulp.task('default',['watch']);


