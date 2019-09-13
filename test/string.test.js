let str = require('../string.js');
const assert = require('assert');

describe('unique char', () => {
  it('abc expect 0', () => {
    assert.strictEqual(str.firstUniqChar('abc'), 0);
  });
  it('abca expect 1', () => {
    assert.strictEqual(str.firstUniqChar('abca'), 1);
  });
  it('aabbcc expect -1', () => {
    assert.strictEqual(str.firstUniqChar('aabbcc'), -1);
  });
});

describe('Match Parentheses', () => {
  it('{[]} true', () => {
    assert.strictEqual(str.matchParentheses('{[]}'), true);
  });
  it('([)], false', () => {
    assert.strictEqual(str.matchParentheses('([)]'), false);
  });
  it('(] false', () => {
    assert.strictEqual(str.matchParentheses('(]'), false);
  });
  it('()[]{}', () => {
    assert.strictEqual(str.matchParentheses('()[]{}'), true);
  });
});

describe('reverse string', () => {
  it('hello', () => {
    assert.strictEqual(str.reverseString('hello'), 'olleh');
  });
  it('ab', () =>{
    assert.strictEqual(str.reverseString('ab'), 'ba');
  });
});
