import { isSuperset, union, intersection as _intersection, symmetricDifference, difference } from '../src/set';
import { strictEqual, deepStrictEqual } from 'assert';

describe('isSuperset', () => {
  it('123, 12, true', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([1, 2]);
    strictEqual(isSuperset(s1, s2), true);
  });
  it('12, 123, false', () => {
    const s1 = new Set([1, 2]);
    const s2 = new Set([1, 2, 3]);
    strictEqual(isSuperset(s1, s2), false);
  });
  it('12, 12, true', () => {
    const s1 = new Set([1, 2]);
    const s2 = new Set([1, 2]);
    strictEqual(isSuperset(s1, s2), true);
  });
});

describe('union', () => {
  it('123, 234', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([2, 3, 4]);
    const s3 = new Set([1, 2, 3, 4]);
    deepStrictEqual(union(s1, s2), s3);
  });
  it('123,123', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([1, 2, 3]);
    const s3 = new Set([1, 2, 3]);
    deepStrictEqual(union(s1, s2), s3);
  });
});

describe('intersection', () => {
  it('123, 234', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([2, 3, 4]);
    const intersection = new Set([2, 3]);
    deepStrictEqual(_intersection(s1, s2), intersection);
  });
  it('12, 34', () => {
    const s1 = new Set([1, 2]);
    const s2 = new Set([3, 4]);
    const intersection = new Set();
    deepStrictEqual(_intersection(s1, s2), intersection);
  });
});

describe('symmetricDifference', () => {
  it('123, 234', () => {
    const s1 = new Set([1, 2, 3]);
    const s2 = new Set([2, 3, 4]);
    const s3 = new Set([1, 4]);
    deepStrictEqual(symmetricDifference(s1, s2), s3);
  });
  it('12, 34', () => {
    const s1 = new Set([1, 2]);
    const s2 = new Set([3, 4]);
    const s3 = new Set([1, 2, 3, 4]);
    deepStrictEqual(symmetricDifference(s1, s2), s3);
  });
});

describe('difference', () => {
  const s1 = new Set([1, 2, 3]);
  const s2 = new Set([2, 3, 4]);
  const s3 = new Set([1]);
  deepStrictEqual(difference(s1, s2), s3);
});
