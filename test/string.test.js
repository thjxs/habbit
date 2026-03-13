import { firstUniqChar, matchParentheses, reverseString, getWords, jsonToUrl } from '../src/string.js';
import { strictEqual, deepStrictEqual } from 'assert';

describe('unique char', () => {
  it('abc expect 0', () => {
    strictEqual(firstUniqChar('abc'), 0);
  });
  it('abca expect 1', () => {
    strictEqual(firstUniqChar('abca'), 1);
  });
  it('aabbcc expect -1', () => {
    strictEqual(firstUniqChar('aabbcc'), -1);
  });
});

describe('Match Parentheses', () => {
  it('{[]} true', () => {
    strictEqual(matchParentheses('{[]}'), true);
  });
  it('([)], false', () => {
    strictEqual(matchParentheses('([)]'), false);
  });
  it('(] false', () => {
    strictEqual(matchParentheses('(]'), false);
  });
  it('()[]{}', () => {
    strictEqual(matchParentheses('()[]{}'), true);
  });
});

describe('reverse string', () => {
  it('hello', () => {
    strictEqual(reverseString('hello'), 'olleh');
  });
  it('ab', () => {
    strictEqual(reverseString('ab'), 'ba');
  });
});

describe('get words', () => {
  it('   hello word   ', () => {
    const wordsArr = ['hello', 'word'];
    deepStrictEqual(getWords('    hello word  '), wordsArr);
  });
});

describe('test json to url', () => {
  it('{foo: "bar"}', () => {
    const url = jsonToUrl({ foo: 'bar' });
    strictEqual(url, '&foo=bar');
  });
  it('{foo: "bar", zoo: undefined, add: null}', () => {
    const url = jsonToUrl({ foo: 'bar', zoo: undefined, add: null });
    strictEqual(url, '&foo=bar');
  });
});
