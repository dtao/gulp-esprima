var esprima = require('esprima'),
    through = require('through2');

module.exports = function(options) {
  options || (options = {});

  var stringify = options.pretty ?
    function(tree) { return JSON.stringify(tree, null, 2); } :
    JSON.stringify;

  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    try {
      var code = String(file.contents),
          tree = esprima.parse(code, options.esprima || {});
      file.contents = new Buffer(stringify);
      this.push(file);

    } catch (e) {
      console.warn('Error caught from esprima.parse: ' + e);
      this.push(file);
    }

    return callback();
  });
};
