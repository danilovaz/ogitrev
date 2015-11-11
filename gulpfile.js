'use strict'

var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require("gulp-notify"),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    // minifyCss = require('gulp-minify-css'),
    browserSync = require('browser-sync').create();

// SERVER CONNECT
gulp.task('connect', function() {
    connect.server({
      root: 'app',
      livereload: true
    });
});

// CSS
gulp.task('css', function () {
  return gulp.src('assets_externo/scss/modules/*.scss')
    .pipe(sass())
    .pipe(prefix('last 15 versions'))
    // .pipe(minifyCss())
    .pipe(rename("mage.min.css"))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.stream())
    .pipe(notify("Alteração realizado com sucesso!"))
    .pipe(connect.reload());
});

// HTML
gulp.task('html', function () {
  return gulp.src('app/*.html')
    .pipe(connect.reload());
});

// WATCH
gulp.task('watch', function () {

  browserSync.init({
        server: "./app"
  });

  gulp.watch('assets/css/*.css', ['css'])
  gulp.watch('app/*.html', ['html']).on('change', browserSync.reload);
});

// DEFAULT
gulp.task('default', ['connect', 'html', 'css', 'watch']);
