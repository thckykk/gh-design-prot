var gulp = require('gulp');
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

var options = {
    outputStyle: 'expanded',
    sourceMap: true,
    sourceComments: false
};

gulp.task('sass', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(plumber())
        .pipe(sass(options))
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./dest/css'));
});

var pug = require('gulp-pug');
 
gulp.task('pug', () => {
  return gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dest/'));
});

gulp.task('default', function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./pug/**/*.pug', ['pug']);
});

