var add = require('../add.js');

const assert = require('assert');

describe('#add', () => {
  describe('#a1', () => {
    it('2', () => {
      assert.strictEqual(add(1, 1), 2);
    });
  });
  describe('#a2', () => {
    it('u', () => {
      assert.strictEqual(add(1), NaN);
    });
  });
});
