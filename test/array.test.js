import { intersect, intersect_1, moveZeroes, removeDuplicatezs } from '../src/array';
import { deepStrictEqual, strictEqual } from 'assert';

describe('intersection', () => {
  it('1', () => {
    deepStrictEqual(intersect([1], [1, 2, 3]), [1]);
  });
  it('1223, 23242', () => {
    deepStrictEqual(
      intersect([1, 2, 2, 3], [2, 3, 2, 4, 2]),
      [2, 3, 2]
    );
  });
  it('12, 34', () => {
    deepStrictEqual(intersect([1, 2], [3, 4]), []);
  });
});

describe('intersection v1', () => {
  it('1', () => {
    deepStrictEqual(intersect_1([1], [1, 2, 3]), [1]);
  });
  it('1223, 23242', () => {
    deepStrictEqual(
      intersect_1([1, 2, 2, 3], [2, 3, 2, 4, 2]),
      [2, 3, 2, 2]
    );
  });
  it('12, 34', () => {
    deepStrictEqual(intersect_1([1, 2], [3, 4]), []);
  });
});

describe('move zeros', () => {
  it('1010', () => {
    let a = [1, 0, 1, 0];
    moveZeroes(a);
    deepStrictEqual(a, [1, 1, 0, 0]);
  });
  it('11', () => {
    let a = [1, 1];
    moveZeroes(a);
    deepStrictEqual(a, [1, 1]);
  });
  it('00', () => {
    let a = [0, 0];
    moveZeroes(a);
    deepStrictEqual(a, [0, 0]);
  });
});

describe('remove duplicates', () => {
  it('1,1,2', () => {
    const a = [1, 1, 2];
    const carr = [1, 2];
    const index = removeDuplicatezs(a);
    strictEqual(index, carr.length);
    deepStrictEqual(a.slice(0, index), carr);
  });
  it('1,2,1,2', () => {
    strictEqual(removeDuplicatezs([1, 1, 1, 2, 2, 3, 4]), 4);
  });
});
