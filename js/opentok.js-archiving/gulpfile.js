var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var merge = require('merge-stream');

var dist = 'dist';

gulp.task('default', ['js', 'css']);

gulp.task('js', function () {
  var accPack = gulp.src('src/archiving-pack-annotation.js')
    .pipe(concat('opentok-archiving.js'))
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
