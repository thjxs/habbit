const assert = require('assert');
const regex = require('../src/regex');

describe('# replace', function () {
  it('# remove first or last spaces', function () {
    const str = '    a  a ';
    assert.strictEqual(regex.removeFirstOrLastSpaces(str), 'a  a');
  });
});
