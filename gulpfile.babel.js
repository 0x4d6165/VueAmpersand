'use-strict';

import gulp from 'gulp';
import stylus from 'gulp-stylus';
import rename from 'gulp-rename';
import bootstrap from 'bootstrap-styl';
import webpack from 'webpack-stream';

gulp.task('webpack', () => {
  return gulp.src('public/javascripts/app.js')
    .pipe(webpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }, ],
      }
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('stylus', () => {
  gulp.src('public/stylesheets/app.styl')
    .pipe(stylus({
      compress: true,
      use: bootstrap()
    }))
    .pipe(gulp.dest('public/stylesheets'));
});


gulp.task('default', ['browserify', 'stylus']);
