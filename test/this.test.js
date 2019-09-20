const assert = require('assert');

describe('#this', () => {
  it('#function context', () => {
    function f1() {
      return this;
    }
    assert.deepStrictEqual(f1(), global);
  });
  it('#strict function context', () => {
    function f2() {
      'use strict';
    /* jshint ignore:start */
      return this;
    /* jshint ignore:end */
    }
    assert.deepStrictEqual(f2(), undefined);
  });
  describe('#use call() or apply()', () => {
    var obj = {a: 'Custom'};
    var a = 'Global';
    function whatsThis() {
      return this.a;
    }
    it('# global', () => {
      assert.deepStrictEqual(whatsThis(), undefined);
    });
    it('#use call', () => {
      assert.deepStrictEqual(whatsThis.call(obj), 'Custom');
    });
    it('# apply', () => {
      assert.deepStrictEqual(whatsThis.apply(obj), 'Custom');
    });
  });
  it('# bind', () => {
    function f() {
      return this.a;
    }
    var b = f.bind({a: 'az'});
    assert.deepStrictEqual(b(), 'az');
  });
  it('# bind only works once', () => {
    function f() {
      return this.a;
    }
    var g = f.bind({a: 'az'});
    var h = g.bind({a: 'we'});
    var o = {a: 33, f: f, g: g, h: h};
    assert.deepStrictEqual(o.a, o.f());
    assert.deepStrictEqual(o.g(), o.h());
  });
  describe('# arrow function', () => {
    var globalObject = this;
    var foo = (() => this);
    var obj = {func: foo};
    it('# globalObject', () => {
      assert.deepStrictEqual(foo(), globalObject);
    });
    it('# call as a method of an object', () => {
      assert.deepStrictEqual(obj.func(), globalObject);
    });
    it('# Attempt to set this using bind', () => {
      assert.deepStrictEqual(foo.call(obj), globalObject);
    });
    it('# Attempt to set this using bind', () => {
      foo.bind(obj);
      assert.deepStrictEqual(foo(), globalObject);
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
      }
    };
    Object.defineProperty(o, 'sum', {
      get: sum, enumerable: true, configurable: true
    });
    it('#sum', () => {
      assert.deepStrictEqual(o.sum, 6);
    });
    it('average', () => {
      assert.deepStrictEqual(o.average, 2);
    });
  });
});
