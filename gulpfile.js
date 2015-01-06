var del = require('del'),
    gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('templates', function() {
  return gulp.src('src/*.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.jade', ['templates']);
});

gulp.task('clean', function(callback) {
  del(['dist/*.html'], callback)
});

gulp.task('default', ['templates', 'watch']);
