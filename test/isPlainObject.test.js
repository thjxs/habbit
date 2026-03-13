import { strictEqual } from 'assert';
import isPlainObject from '../src/isPlainObject';

describe('# is plain object', function() {
  it('new Date()', function() {
    strictEqual(isPlainObject(new Date()), false);
  });
  it('new Test()', function() {
    class Test {
      constructor() {
        this.hi = 1;
      }
    }
    strictEqual(isPlainObject(new Test()), false);
  });
  it('{x: 1}', function() {
    strictEqual(isPlainObject({ x: 1 }), true);
  });
});
