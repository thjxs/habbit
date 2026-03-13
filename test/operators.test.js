import { strictEqual } from 'assert';

describe('# plus', () => {
  describe('# unary convert', () => {
    it('null', () => {
      strictEqual(+null, 0);
    });
    it('undefined', () => {
      strictEqual(+undefined, NaN);
    });
    it('string', () => {
      strictEqual(+'string', NaN);
    });
  });

  describe('# plus number', () => {
    it('2 + null', () => {
      strictEqual(2 + null, 2);
    });
    it('2 + undefined', () => {
      strictEqual(2 + undefined, NaN);
    });
    it('2 + "hello"', () => {
      strictEqual(2 + 'hello', '2hello');
    });
  });
  describe('# plus string', () => {
    it('"2" + null', () => {
      strictEqual('2' + null, '2null');
    });
    it('"2" + undefined', () => {
      strictEqual('2' + undefined, '2undefined');
    });
    it('"2" + "hello"', () => {
      strictEqual('2' + 'hello', '2hello');
    });
  });
});
