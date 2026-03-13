import { createFunc } from '../src/context';
import { strictEqual } from 'assert';

function returnX(x) {
  return x;
}
describe('context', () => {
  it('arguments', () => {
    rx = createFunc(returnX);
    strictEqual(rx(12), 12);
  });
});
