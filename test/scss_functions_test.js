'use strict';

var grunt = require('grunt');
var path = require('path');

var dirActual = path.join(__dirname, '..', 'tmp');
var dirExpected = path.join(__dirname, 'expected');

exports.scss_functions = {
  setUp: function (done) {
    done();
  },
  color: function (test) {
    test.expect(1);

    var actual = grunt.file.read(path.join(dirActual, 'color.css'));
    var expected = grunt.file.read(path.join(dirExpected, 'color.css'));
    test.strictEqual(actual, expected);

    test.done();
  },
  list: function (test) {
    test.expect(1);

    var actual = grunt.file.read(path.join(dirActual, 'list.css'));
    var expected = grunt.file.read(path.join(dirExpected, 'list.css'));
    test.strictEqual(actual, expected);

    test.done();
  },
  misc: function (test) {
    test.expect(1);

    var actual = grunt.file.read(path.join(dirActual, 'misc.css'));
    var expected = grunt.file.read(path.join(dirExpected, 'misc.css'));
    test.strictEqual(actual, expected);

    test.done();
  },
  number: function (test) {
    test.expect(1);

    var actual = grunt.file.read(path.join(dirActual, 'number.css'));
    var expected = grunt.file.read(path.join(dirExpected, 'number.css'));
    test.strictEqual(actual, expected);

    test.done();
  },
  string: function (test) {
    test.expect(1);

    var actual = grunt.file.read(path.join(dirActual, 'string.css'));
    var expected = grunt.file.read(path.join(dirExpected, 'string.css'));
    test.strictEqual(actual, expected);

    test.done();
  }
};
