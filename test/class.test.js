import Car from '../src/Car.js';
import Point from '../src/point.js';

import { deepStrictEqual, notStrictEqual, strictEqual } from 'assert';

describe('#class', () => {
  describe('#private and prototype', () => {
    it('private', () => {
      const c1 = new Car();
      const c2 = new Car();
      c1.arr.push(1);
      c2.arr.push(2);
      deepStrictEqual(c1.arr, [1]);
      deepStrictEqual(c2.arr, [2]);
      notStrictEqual(c1.arr, c2.arr);
    });
    it('prototype', () => {
      const c1 = new Car();
      const c2 = new Car();
      c1.condition.push(1);
      c2.condition.push(2);
      deepStrictEqual(c1.condition, c2.condition);
    });
  });
});

describe('#prototype', function() {
  it('# r', () => {
    var p = new Point(3, 4);
    strictEqual(p.r(), 5);
  });
});
