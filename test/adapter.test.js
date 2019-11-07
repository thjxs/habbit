const assert = require('assert');
const adapter = require('../adapter');

describe('# adapter', function () {
  it('# call provider function with up to n arguments', () => {
    const firstTwoMax = adapter.ary(Math.max, 2);
    assert.deepStrictEqual([[2,6,'a'], [6,3,8], [10]].map(x => firstTwoMax(...x)), [6,6,10]);
  });
  it('# use a closure to call stored key with stored arguments', () => {
    const counter = adapter.call('reduce', (a, x) => a += x, 0);
    assert.deepStrictEqual(counter([1,2,3]), [1,2,3].reduce((a, x) => a += x, 0));
  });
  it('# Given a function return a closure that collects all inputs into an array-acception function', () => {
    const obj = {
      map: function (args) {
        return args.map(item => item * 2);
      }
    };
    const timesTwo = adapter.collectInto(obj.map);
    assert.deepStrictEqual(timesTwo(1,2,3), [2,4,6]);
  });
  it('# return a closure that takes variadic inputs, and splices the last arguments to make it the first argument before applying the rest.', () => {
    let a = {name: 'john'};
    let b = {};
    const mergeFrom = adapter.flip(Object.assign);
    let mergePerson = mergeFrom.bind(null, a);
    assert.deepEqual(mergePerson(b), a);
  });
  it('# use Array.prototype.map() and Function.prototype.apply() to apply each function to given arguments', () => {
    const minMax = adapter.over(Math.min, Math.max);
    assert.deepStrictEqual(minMax(1,2,3,4,5), [1,5]);
  });
  it('# use Array.prototype.map() to apply transforms to args in combination with the spread operator(...) to pass the transformed arguments to fn', () => {
    const square = n => n * n;
    const double = n => n *2;
    const fn = adapter.overArgs((x, y, z) => [x, y, z], [square, double, square]);
    assert.deepStrictEqual(fn(9, 3, 2), [81, 6, 4]);
  });
});
