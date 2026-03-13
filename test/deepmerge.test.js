import deepmerge from '../src/deepmerge';
import { strictEqual } from 'assert';

describe('#deepmerge', () => {
  it('should not be subject to prototype pollution', () => {
    deepmerge(
      {},
      JSON.parse('{"myProperty": "a", "__proto__": {"isAdmin": true}}'),
      {
        clone: false,
      }
    );
    strictEqual({}.isAdmin, undefined);
  });
});
