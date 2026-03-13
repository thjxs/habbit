import { deepStrictEqual, strictEqual } from 'assert';

describe('#this', () => {
  it('#function context', () => {
    function f1() {
      return this;
    }
    deepStrictEqual(f1(), global);
  });
  it('#strict function context', () => {
    function f2() {
      'use strict';
      /* jshint ignore:start */
      return this;
      /* jshint ignore:end */
    }
    deepStrictEqual(f2(), undefined);
  });
  describe('#use call() or apply()', () => {
    var obj = { a: 'Custom' };
    var a = 'Global';
    function whatsThis() {
      return this.a;
    }
    it('# global', () => {
      deepStrictEqual(whatsThis(), undefined);
    });
    it('#use call', () => {
      deepStrictEqual(whatsThis.call(obj), 'Custom');
    });
    it('# apply', () => {
      deepStrictEqual(whatsThis.apply(obj), 'Custom');
    });
  });
  it('# bind', () => {
    function f() {
      return this.a;
    }
    var b = f.bind({ a: 'az' });
    deepStrictEqual(b(), 'az');
  });
  it('# bind only works once', () => {
    function f() {
      return this.a;
    }
    var g = f.bind({ a: 'az' });
    var h = g.bind({ a: 'we' });
    var o = { a: 33, f: f, g: g, h: h };
    deepStrictEqual(o.a, o.f());
    deepStrictEqual(o.g(), o.h());
    strictEqual(o.g(), 'az');
  });
  describe('# arrow function', () => {
    var globalObject = this;
    var foo = () => this;
    var obj = { func: foo };
    it('# globalObject', () => {
      deepStrictEqual(foo(), globalObject);
    });
    it('# call as a method of an object', () => {
      deepStrictEqual(obj.func(), globalObject);
    });
    it('# Attempt to set this using bind', () => {
      deepStrictEqual(foo.call(obj), globalObject);
    });
    it('# Attempt to set this using bind', () => {
      foo.bind(obj);
      deepStrictEqual(foo(), globalObject);
    });
  });
  describe('# this with a getter or setter', () => {
    function sum() {
      return this.a + this.b + this.c;
    }
    var o = {
      a: 1,
      b: 2,
      c: 3,
      get average() {
        return (this.a + this.b + this.c) / 3;
      },
    };
    Object.defineProperty(o, 'sum', {
      get: sum,
      enumerable: true,
      configurable: true,
    });
    it('#sum', () => {
      deepStrictEqual(o.sum, 6);
    });
    it('average', () => {
      deepStrictEqual(o.average, 2);
    });
  });
});
