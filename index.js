var esprima = require('esprima'),
    through = require('through2');

module.exports = function(options) {
  options || (options = {});

  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    try {
      var code = String(file.contents),
          tree = esprima.parse(code, options);
      file.contents = new Buffer(JSON.stringify(tree));
      this.push(file);

    } catch (e) {
      console.warn('Error caught from esprima.parse: ' + e);
      this.push(file);
    }

    return callback();
  });
};
