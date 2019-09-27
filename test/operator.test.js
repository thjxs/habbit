const assert = require('assert');
var globalVar = 'test';
let globalLet = 'test';
aVar = 'test';
this.varWithThis = 'test';
let deleteOnthis = delete this.varWithThis;
describe('# delete', function () {
  it('# global declare with var', function () {
    assert.ok(!delete globalVar);
  });
  it('# global declare with let', function () {
    assert.ok(!delete globalLet);
  });
  it('# global a deletable property of the global object', function () {
    assert.ok(delete aVar);
  });
  it('# global declare with this', function () {
    assert.ok(deleteOnthis);
  });
});
