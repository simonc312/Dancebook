var gulp = require('gulp');
var source = require("vinyl-source-stream");
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

var DEST = 'dist';
var DEST_SRC = DEST + '/src';
var MOBILE_DEST = DEST + '/mobile';
var MOBILE_DEST_SRC = MOBILE_DEST+'/src';
var paths = {
	HTML: ['src/event_page.html','src/team_page.html','src/create_form.html','src/index.html'],
	MINIFIED_OUT: 'build.min.js',
	JS_OUT: 'build.js',
  CSS_OUT: 'style.css',
	DEST_BUILD: DEST+'/build',
  IMG_DEST_SRC: DEST_SRC+'/images',
  MOBILE_DEST_BUILD: MOBILE_DEST+'/build',
  MOBILE_IMG_DEST_SRC: MOBILE_DEST+'/src/images',
	ENTRY_POINTS: ['src/js/home.js'],
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

var flags = {
  production: false, mobile: false
}

var errorLogger = function(err){
  console.log("************ start of error log **************");
  gutil.log(err); 
  console.log("************ end of error log ****************");
  // end this stream
  this.emit('end');
}

//used primarily for picking between destinations given flag
var destPicker = function(condition,destA,destB){
  return condition ? destA : destB;
}
var mobileDestPicker = function(destA,destB){
  return destPicker(flags.mobile,destA,destB);
}
var prodDestPicker = function(destA,destB){
  return destPicker(flags.production,destA,destB);
}

// copies index HTML to DEST
gulp.task('copy-html', function(){
  return gulp.src(paths.HTML)
  .pipe(gulp.dest(mobileDestPicker(DEST,DEST)));
});

gulp.task('copy-css', function(){
  return gulp.src(paths.css)
  .pipe(gulp.dest(mobileDestPicker(MOBILE_DEST_SRC,DEST_SRC)));
});

gulp.task('copy-images', function(){
  return gulp.src(paths.images)
  .pipe(gulp.dest(mobileDestPicker(paths.MOBILE_IMG_DEST_SRC,paths.IMG_DEST_SRC)));
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
        .pipe(gulp.dest(mobileDestPicker(MOBILE_DEST_SRC,DEST_SRC)));
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
    entries: paths.ENTRY_POINTS,
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));
  return watcher.on('update',function(){
    watcher.bundle()
      .on('error',errorLogger)
      .pipe(source(paths.JS_OUT))
      .pipe(gulp.dest(mobileDestPicker(MOBILE_DEST_SRC,DEST_SRC)));
      console.log('Updated JS');
  })
    .bundle()
    .on('error',errorLogger)
    .pipe(source(paths.JS_OUT))
    .pipe(gulp.dest(mobileDestPicker(MOBILE_DEST_SRC,DEST_SRC)));
});
gulp.task('mobile-flag-on',function(){
  flags.mobile = true; 
  console.log('mobile flag is ' + flags.mobile);
});
gulp.task('prod-flag-on',function(){
  flags.production = true;
  console.log('prod flag is ' + flags.production);
});
gulp.task('copy',['copy-html','scss:prefix:css','copy-images']);
gulp.task('watch',['watch-jsx','watch-html','watch-css','watch-images']);
gulp.task('default',function(){runSequence('copy','watch')});

gulp.task('mobile-build',function(){runSequence('mobile-flag-on','default')});
gulp.task('production-build',function(){runSequence('prod-flag-on','default')});


