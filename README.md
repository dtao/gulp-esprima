gulp-esprima
============

## Usage:

```javascript
var gulp    = require('gulp'),
    esprima = require('gulp-esprima');

// This task will parse all of the JavaScript files under lib/
// and save JSON representations of their ASTs (abstract syntax
// trees) under parsed/
gulp.task('parse', function() {
  return gulp.src('lib/**/*.js')
    .pipe(esprima()) // or esprima({ [options] })
    .pipe(gulp.dest('parsed/'));
});
```

This plugin accepts two options:

- `pretty`: for nicely indented JSON (default: `false`)
- `esprima`: options to pass directly to `esprima.parse`
