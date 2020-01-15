const assert = require('assert');
const scope = require('../scope');

describe('# function scope', function() {
  var outsideScope = 'test';
  it('# test hosting var', function() {
    assert.strictEqual('test', outsideScope);
  });
  it('# hosting', function() {
    assert.strictEqual(undefined, outsideScope);
    var outsideScope = 'hosting';
    assert.strictEqual('hosting', outsideScope);
  });
  it('# scope chain', function() {
    var x = 'new x';
    assert.strictEqual('x', scope.returnX());
  });
});
