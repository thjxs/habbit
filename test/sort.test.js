var sort = require('../src/sort.js');

const assert = require('assert');

describe('#sort', () => {
  it('asc', () => {
    const a = [1, 5, 2, 3, 6, 4];
    sort.sort(a);
    assert.deepStrictEqual(a, [1, 2, 3, 4, 5, 6]);
  });
  it('asc, 2', () => {
    const a = [2, 1];
    sort.sort(a);
    assert.deepStrictEqual(a, [1, 2]);
  });
  it('asc, 1', () => {
    const a = [1];
    sort.sort(a);
    assert.deepStrictEqual(a, [1]);
  });
});

describe('#sort desc', () => {
  it('desc', () => {
    const a = [1, 5, 2, 3, 6, 4];
    sort.asort(a);
    assert.deepStrictEqual(a, [6, 5, 4, 3, 2, 1]);
  });
});
