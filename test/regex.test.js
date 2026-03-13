import { strictEqual } from 'assert';
import { removeFirstOrLastSpaces, addACommaInThousands } from '../src/regex';

describe('# replace', function() {
  it('# remove first or last spaces', function() {
    const str = '    a  a ';
    strictEqual(removeFirstOrLastSpaces(str), 'a  a');
  });
});

describe('# thousands', function() {
  it('# add a comma in thousands', function() {
    const strs = [
      ['123', '123'],
      ['23456789', '23,456,789'],
      ['123456789', '123,456,789'],
    ];
    strs.forEach((v) => {
      const [str, target] = v;
      strictEqual(addACommaInThousands(str), target);
    });
  });
});
