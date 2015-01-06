del = require('del')
gulp = require('gulp')
jade = require('gulp-jade')

gulp.task('templates', ->
  gulp.src('src/*.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('dist/'))
)

gulp.task('watch', ->
  gulp.watch('src/*.jade', ['templates'])
)

gulp.task('clean', (callback) ->
  del(['dist/*.html'], callback)
)

gulp.task('default', ['templates', 'watch'])
