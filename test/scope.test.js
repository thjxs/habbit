import { strictEqual } from 'assert';
import { returnX } from '../src/scope';

describe('# function scope', function() {
  var outsideScope = 'test';
  it('# test hosting var', function() {
    strictEqual('test', outsideScope);
  });
  it('# hosting', function() {
    strictEqual(undefined, outsideScope);
    var outsideScope = 'hosting';
    strictEqual('hosting', outsideScope);
  });
  it('# scope chain', function() {
    var x = 'new x';
    strictEqual('x', returnX());
  });
});
