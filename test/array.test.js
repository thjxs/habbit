const arr = require('../array');
const assert = require('assert');

describe('intersection', () => {
  it('1', () => {
    assert.deepStrictEqual(arr.intersect([1], [1, 2, 3]), [1]);
  });
  it('1223, 23242', () => {
    assert.deepStrictEqual(arr.intersect([1, 2, 2, 3], [2, 3, 2, 4, 2]), [
      2,
      3,
      2
    ]);
  });
  it('12, 34', () => {
    assert.deepStrictEqual(arr.intersect([1, 2], [3, 4]), []);
  });
});

describe('intersection v1', () => {
  it('1', () => {
    assert.deepStrictEqual(arr.intersect_1([1], [1, 2, 3]), [1]);
  });
  it('1223, 23242', () => {
    assert.deepStrictEqual(arr.intersect_1([1, 2, 2, 3], [2, 3, 2, 4, 2]), [
      2,
      3,
      2,
      2
    ]);
  });
  it('12, 34', () => {
    assert.deepStrictEqual(arr.intersect_1([1, 2], [3, 4]), []);
  });
});

describe('move zeros', () => {
  it('1010', () => {
    let a = [1, 0, 1, 0];
    arr.moveZeroes(a);
    assert.deepStrictEqual(a, [1, 1, 0, 0]);
  });
  it('11', () => {
    let a = [1, 1];
    arr.moveZeroes(a);
    assert.deepStrictEqual(a, [1, 1]);
  });
  it('00', () => {
    let a = [0, 0];
    arr.moveZeroes(a);
    assert.deepStrictEqual(a, [0, 0]);
  });
});

describe('remove duplicates', () => {
  it('1,1,2', () => {
    const a = [1, 1, 2];
    const carr = [1, 2];
    const index = arr.removeDuplicatezs(a);
    assert.strictEqual(index, carr.length);
    assert.deepStrictEqual(a.slice(0, index), carr);
  });
  it('1,2,1,2', () => {
    assert.strictEqual(arr.removeDuplicatezs([1, 1, 1, 2, 2, 3, 4]), 4);
  });
});
