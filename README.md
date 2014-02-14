gulp-esprima
============

Usage:

```javascript
var gulp    = require('gulp'),
    esprima = require('gulp-esprima');

gulp.task('parse', function() {
  return gulp.src('lib/**/*.js')
    .pipe(esprima())
    .pipe(gulp.dest('parsed/'));
});
```
