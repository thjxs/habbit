const assert = require('assert');
const regex = require('../src/regex');

describe('# replace', function () {
  it('# remove first or last spaces', function () {
    const str = '    a  a ';
    assert.strictEqual(regex.removeFirstOrLastSpaces(str), 'a  a');
  });
});

describe('# thousands', function () {
  it('# add a comma in thousands', function () {
    const strs = [
      ['123', '123'],
      ['23456789', '23,456,789'],
      ['123456789', '123,456,789'],
    ];
    strs.forEach((v) => {
      const [str, target] = v;
      assert.strictEqual(regex.addACommaInThousands(str), target);
    });
  });
});
