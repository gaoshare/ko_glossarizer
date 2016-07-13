var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('serve', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./**/*.js').on('change', browserSync.reload);

});



gulp.task('default', ['serve']);

function swallowError(error) {
  console.log(error.toString());
  this.emit('end')
}