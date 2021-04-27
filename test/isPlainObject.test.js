const assert = require('assert');
const isPlainObject = require('../src/isPlainObject');

describe('# is plain object', function () {
  it('new Date()', function () {
    assert.strictEqual(isPlainObject(new Date()), false);
  });
  it('new Test()', function () {
    function Test() {
      this.hi = 1;
    }
    assert.strictEqual(isPlainObject(new Test()), false);
  });
  it('{x: 1}', function () {
    assert.strictEqual(isPlainObject({ x: 1 }), true);
  });
});
