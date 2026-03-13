/**
 * JavaScript global variables are properties of the global object.
 */
import { ok, deepStrictEqual } from 'assert';
var globalVar = 'test';
let globalLet = 'test';
aVar = 'test';
this.varWithThis = 'test';
let deleteOnthis = delete this.varWithThis;
describe('# delete', function() {
  it('# global declare with var', function() {
    ok(!delete globalVar); // jshint ignore:line
  });
  it('# global declare with let', function() {
    ok(!delete globalLet); // jshint ignore:line
  });
  it('# global a deletable property of the global object', function() {
    ok(delete aVar); // jshint ignore:line
  });
  it('# global declare with this', function() {
    ok(deleteOnthis);
  });
});

describe('# in', function() {
  it('# in copy the names of all object properties into an array', function() {
    const o = { x: 1, y: 2, z: 3 };
    const a = [];
    const testArr = ['x', 'y', 'z'];
    let i = 0;
    for (a[i++] in o);
    deepStrictEqual(a, testArr);
  });
});
