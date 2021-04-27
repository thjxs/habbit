const assert = require('assert');

describe('# plus', () => {
  describe('# unary convert', () => {
    it('null', () => {
      assert.strictEqual(+null, 0);
    });
    it('undefined', () => {
      assert.strictEqual(+undefined, NaN);
    });
    it('string', () => {
      assert.strictEqual(+'string', NaN);
    });
  });

  describe('# plus number', () => {
    it('2 + null', () => {
      assert.strictEqual(2 + null, 2);
    });
    it('2 + undefined', () => {
      assert.strictEqual(2 + undefined, NaN);
    });
    it('2 + "hello"', () => {
      assert.strictEqual(2 + 'hello', '2hello');
    });
  });
  describe('# plus string', () => {
    it('"2" + null', () => {
      assert.strictEqual('2' + null, '2null');
    });
    it('"2" + undefined', () => {
      assert.strictEqual('2' + undefined, '2undefined');
    });
    it('"2" + "hello"', () => {
      assert.strictEqual('2' + 'hello', '2hello');
    });
  });
});
