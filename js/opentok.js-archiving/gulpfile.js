var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var merge = require('merge-stream');

var dist = 'dist';

gulp.task('default', ['js', 'css']);

gulp.task('js', function () {
  var accPack = gulp.src('src/acc-pack-archiving.js')
    .pipe(rename('opentok-archiving.js'))
    .pipe(gulp.dest(dist));

  var min = gulp.src('dist/opentok-archiving.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest(dist));

  return merge(accPack, min);
});


gulp.task('dist', ['js']);
