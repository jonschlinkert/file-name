'use strict';

require('mocha');
var assert = require('assert');
var filename = require('./');

it('should return the filename without extension:', function () {
  assert(filename('a') === 'a');
  assert(filename('a.json') === 'a');
  assert(filename('foo/a.json') === 'a');
  assert(filename('foo/bar/a.json') === 'a');
  assert(filename('.gitignore') === '.gitignore');
});

