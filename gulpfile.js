var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('templates', function() {
  return gulp.src('src/*.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['templates']);
