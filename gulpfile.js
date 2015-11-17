'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('sass:watch', function () {
  gulp.watch('./dev/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  gulp.src('./dev/scss/**/*.scss')
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(gulp.dest('./dev/css/'));
});

gulp.task('copy-HTML', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
    return gulp.src('dev/**/*.html')
    .pipe(gulp.dest('build/'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('webpackdev', function() {
  return gulp.src('./dev/js/**.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      externals:{
        jquery: 'jQuery' //dependent on loading jquery from CDN
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('minifyCSS', function() {
  return gulp.src('./dev/css/*.css')
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('build', ['copy-HTML', 'webpackdev', 'minifyCSS']);



