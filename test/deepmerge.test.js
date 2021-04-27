const deepmerge = require('../src/deepmerge');
const assert = require('assert');

describe('#deepmerge', () => {
  it('should not be subject to prototype pollution', () => {
    deepmerge(
      {},
      JSON.parse('{"myProperty": "a", "__proto__": {"isAdmin": true}}'),
      {
        clone: false,
      }
    );
    assert.strictEqual({}.isAdmin, undefined);
  });
});
