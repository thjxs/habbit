import { strictEqual } from 'assert';

function check(input) {
  if (input) {
    return true;
  }
  return false;
}

describe('chekc value is empty', () => {
  it('undefined', () => {
    strictEqual(check(undefined), false);
  });
  it('null', () => {
    strictEqual(check(null), false);
  });
  it('empty string', () => {
    strictEqual(check(''), false);
  });
  it('0', () => {
    strictEqual(check(0), false);
  })
  it('false', () => {
    strictEqual(check(false), false);
  })
});
