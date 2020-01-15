var Car = require('../Car.js');
var Point = require('../point.js');

const assert = require('assert');

describe('#class', () => {
  describe('#private and prototype', () => {
    it('private', () => {
      const c1 = new Car();
      const c2 = new Car();
      c1.arr.push(1);
      c2.arr.push(2);
      assert.deepStrictEqual(c1.arr, [1]);
      assert.deepStrictEqual(c2.arr, [2]);
      assert.notStrictEqual(c1.arr, c2.arr);
    });
    it('prototype', () => {
      const c1 = new Car();
      const c2 = new Car();
      c1.condition.push(1);
      c2.condition.push(2);
      assert.deepStrictEqual(c1.condition, c2.condition);
    });
  });
});

describe('#prototype', function() {
  it('# r', () => {
    var p = new Point(3, 4);
    assert.strictEqual(p.r(), 5);
  });
});
