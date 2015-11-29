'use-strict';

import gulp from 'gulp';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import stylus from 'gulp-stylus';
import uglify from 'gulp-uglify';

gulp.task('browserify', () => {
  return browserify('public/javascripts/app.js')
    .transform('babelify')
    .bundle()
    .pipe(source('bundle.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('stylus', () => {
  gulp.src('public/stylesheets/app.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('public/stylesheets'));
});


gulp.task('default', ['browserify', 'stylus']);
