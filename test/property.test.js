import { strictEqual, notStrictEqual } from 'assert';
describe('#property', function() {
  var o = {};
  var property = {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true,
  };
  it('#define', () => {
    Object.defineProperty(o, 'x', property);
    strictEqual(o.x, property.value);
  });
  it('#enumerable', () => {
    strictEqual(Object.keys(o).length, 0);
  });
  it('#writable false', () => {
    Object.defineProperty(o, 'x', { writable: false });
    let newValue = 2;
    o.x = newValue;
    notStrictEqual(o.x, newValue);
  });
  it('#configurable', () => {
    let newValue = 2;
    Object.defineProperty(o, 'x', { value: newValue });
    strictEqual(o.x, newValue);
  });
});
