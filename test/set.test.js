const setUtil = require('../src/set');
const assert = require('assert');

describe('isSuperset', () => {
  it('123, 12, true', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([1, 2]);
    assert.strictEqual(setUtil.isSuperset(s1, s2), true);
  });
  it('12, 123, false', () => {
    const s1 = new Set([1, 2]);
    const s2 = new Set([1, 2, 3]);
    assert.strictEqual(setUtil.isSuperset(s1, s2), false);
  });
  it('12, 12, true', () => {
    const s1 = new Set([1, 2]);
    const s2 = new Set([1, 2]);
    assert.strictEqual(setUtil.isSuperset(s1, s2), true);
  });
});

describe('union', () => {
  it('123, 234', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([2, 3, 4]);
    const s3 = new Set([1, 2, 3, 4]);
    assert.deepStrictEqual(setUtil.union(s1, s2), s3);
  });
  it('123,123', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([1, 2, 3]);
    const s3 = new Set([1, 2, 3]);
    assert.deepStrictEqual(setUtil.union(s1, s2), s3);
  });
});

describe('intersection', () => {
  it('123, 234', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([2, 3, 4]);
    const intersection = new Set([2, 3]);
    assert.deepStrictEqual(setUtil.intersection(s1, s2), intersection);
  });
  it('12, 34', () => {
    const s1 = new Set([1, 2]);
    const s2 = new Set([3, 4]);
    const intersection = new Set();
    assert.deepStrictEqual(setUtil.intersection(s1, s2), intersection);
  });
});

describe('symmetricDifference', () => {
  it('123, 234', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([2, 3, 4]);
    const s3 = new Set([1, 4]);
    assert.deepStrictEqual(setUtil.symmetricDifference(s1, s2), s3);
  });
  it('12, 34', () => {
    const s1 = new Set([1, 2]);
    const s2 = new Set([3, 4]);
    const s3 = new Set([1, 2, 3, 4]);
    assert.deepStrictEqual(setUtil.symmetricDifference(s1, s2), s3);
  });
});

describe('difference', () => {
  const s1 = new Set([1, 2, 3]);
  const s2 = new Set([2, 3, 4]);
  const s3 = new Set([1]);
  assert.deepStrictEqual(setUtil.difference(s1, s2), s3);
});
