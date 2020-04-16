const assert = require('assert');

describe('#map', () => {
  describe('#clone', () => {
    it('deep strict equal', () => {
      const original = new Map([[1, 'one']]);
      const clone = new Map(original);
      assert.deepStrictEqual(original, clone);
    });
    it('notStrictEqual', () => {
      const original = new Map([[1, 'one']]);
      const clone = new Map(original);
      assert.notStrictEqual(original, clone);
    });
    it('strictEqual', () => {
      const original = new Map([[1, 'one']]);
      const clone = original;
      assert.strictEqual(original, clone);
    });
  });
  describe('#merge', () => {
    it('merge two map', () => {
      const first = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
      ]);
      const expected = new Map([
        [1, 'uno'],
        [2, 'dos'],
        [3, 'three'],
      ]);
      const second = new Map([
        [1, 'uno'],
        [2, 'dos'],
      ]);
      const merged = new Map([...first, ...second]);
      assert.deepStrictEqual(merged, expected);
    });
    it('merge with array', () => {
      const first = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
      ]);
      const expected = new Map([
        [1, 'new'],
        [2, 'dos'],
        [3, 'three'],
        [4, 'arr'],
      ]);
      const second = new Map([
        [1, 'uno'],
        [2, 'dos'],
      ]);
      const merged = new Map([...first, [4, 'arr'], ...second, [1, 'new']]);
      assert.deepStrictEqual(merged, expected);
    });
  });
});
