const assert = require('assert').strict;

describe('equal', () => {
  describe('object', () => {
    it('object', () => {
      assert.deepStrictEqual({a: 1}, {a: '1'});
    });
    const date = new Date();
    const obj = {};
    const fakeDate = {};
    Object.setPrototypeOf(fakeDate, Date.prototype);
    it('object prototype', () => {
      assert.deepStrictEqual(obj, fakeDate);
    });
    it('object prototype label', () => {
      assert.deepStrictEqual(date, fakeDate);
    });
  });
  describe('value', () => {
    it('equal NaN', () => {
      assert.deepStrictEqual(NaN, NaN);
    });
    it('unwrapped numbers', () => {
      assert.deepStrictEqual(new Number(1), new Number(2));
    });
    it('unwrapped string object', () => {
      assert.deepStrictEqual(new String('foo'), Object('foo'));
    });
    it('zero', () => {
      assert.deepStrictEqual(-0, -0);
    });
    it('diff zero', () => {
      assert.deepStrictEqual(0, -0);
    });
  });
  describe('symbol', () => {
    const symbol1 = Symbol();
    const symbol2 = Symbol();
    it('same symbol', () => {
      assert.deepStrictEqual({[symbol1]: 1}, {[symbol1]: 1});
    });
    it('diff symbol', () => {
      assert.deepStrictEqual({[symbol1]: 1}, {[symbol2]: 1});
    });
  });
  describe('weak map', () => {
    const weakMap1 = new WeakMap();
    const weakMap2 = new WeakMap([[{}, {}]]);
    const weakMap3 = new WeakMap();
    weakMap3.unequal = true;
    it('weakMap1 weakMap2', () => {
      assert.deepStrictEqual(weakMap1, weakMap2);
    });
    it('weakMap1, weakMap3 has a property that weakMap1 does not contain', () => {
      assert.deepStrictEqual(weakMap1, weakMap3);
    });
  });
});
