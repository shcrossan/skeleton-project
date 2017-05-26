/**
 * DEPENDENCIES
 */
var gulp = require("gulp");
var scssToCss = require("gulp-sass");
var cssMin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var watch = require('gulp-watch');

/**
 * SASS > CSS > CSSMIN
 */
var scssToCssMinSrc = './assets/scss/*.scss';
var scssToCssMinDest = './assets/css';

gulp.task('scssToCssMin', function () {
  return gulp.src(scssToCssMinSrc)
    .pipe(scssToCss({ includePaths : ['assets/scss']}).on('error', scssToCss.logError))
    .pipe(cssMin())
    .pipe(gulp.dest(scssToCssMinDest));
});


/**
 * WATCH
 */

gulp.task('watchScss', function() {
  console.log('Watching for scss changes...');
  return gulp.watch('assets/scss/**/*.scss', [ 'scssToCssMin' ]);
});

gulp.task('watch', ['watchScss']);

/**
 * REGISTER TASKS
 */

gulp.task('build', [ 'scssToCssMin' ]);

gulp.task("default", [ 'build', 'watch' ]);
