'use strict';

var grunt = require('grunt');
var path = require('path');

var dirActual = path.join(__dirname, '..', 'tmp');
var dirExpected = path.join(__dirname, 'fixtures');
var actual;
var expected;

exports.scss_functions = {
  color: function (test) {
    test.expect(1);

    actual = grunt.file.read(path.join(dirActual, 'color.css'));
    expected = grunt.file.read(path.join(dirExpected, 'color.css'));
    test.strictEqual(actual, expected);

    test.done();
  },

  list: function (test) {
    test.expect(1);

    actual = grunt.file.read(path.join(dirActual, 'list.css'));
    expected = grunt.file.read(path.join(dirExpected, 'list.css'));
    test.strictEqual(actual, expected);

    test.done();
  },

  misc: function (test) {
    test.expect(1);

    actual = grunt.file.read(path.join(dirActual, 'misc.css'));
    expected = grunt.file.read(path.join(dirExpected, 'misc.css'));
    test.strictEqual(actual, expected);

    test.done();
  },

  number: function (test) {
    test.expect(1);

    actual = grunt.file.read(path.join(dirActual, 'number.css'));
    expected = grunt.file.read(path.join(dirExpected, 'number.css'));
    test.strictEqual(actual, expected);

    test.done();
  },

  string: function (test) {
    test.expect(1);

    actual = grunt.file.read(path.join(dirActual, 'string.css'));
    expected = grunt.file.read(path.join(dirExpected, 'string.css'));
    test.strictEqual(actual, expected);

    test.done();
  }
};
