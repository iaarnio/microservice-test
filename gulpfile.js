'use strict';

var
  gulp = require('gulp'),
  nodemon = require('nodemon');

var paths = {
  scripts: 'app/**/*.js',
  css: 'app/css/**/*.css'
};

gulp.task('default', function() {
  gulp.start('nodemon');
  }
);

gulp.task('nodemon', function() {
    nodemon({
        script: 'app/app.js'
    });
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['nodemon']);
})
