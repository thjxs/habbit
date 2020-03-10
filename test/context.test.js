const ct = require('../context');
const assert = require('assert');

function returnX(x) {
  return x;
}
describe('context', () => {
  it('arguments', () => {
    rx = ct.createFunc(returnX);
    assert.strictEqual(rx(12), 12);
  });
});
