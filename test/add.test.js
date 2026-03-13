import add from '../src/add.js';

import { strictEqual } from 'assert';

describe('#add', () => {
  describe('#a1', () => {
    it('2', () => {
      strictEqual(add(1, 1), 2);
    });
  });
  describe('#a2', () => {
    it('u', () => {
      strictEqual(add(1), NaN);
    });
  });
});
