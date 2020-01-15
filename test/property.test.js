const assert = require('assert');
describe('#property', function() {
  var o = {};
  var property = {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
  };
  it('#define', () => {
    Object.defineProperty(o, 'x', property);
    assert.strictEqual(o.x, property.value);
  });
  it('#enumerable', () => {
    assert.strictEqual(Object.keys(o).length, 0);
  });
  it('#writable false', () => {
    Object.defineProperty(o, 'x', { writable: false });
    let newValue = 2;
    o.x = newValue;
    assert.notStrictEqual(o.x, newValue);
  });
  it('#configurable', () => {
    let newValue = 2;
    Object.defineProperty(o, 'x', { value: newValue });
    assert.strictEqual(o.x, newValue);
  });
});
