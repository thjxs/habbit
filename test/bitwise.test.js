const assert = require('assert');

const FLAG_A = 1;
const FLAG_B = 2;
const FLAG_C = 4;
const FLAG_D = 8;
describe('#bitwise', function () {
  it('# 0110 has FLAG_C', function () {
    let flags = parseInt('0110', 2);
    assert.ok(flags & FLAG_C);
  });
  it('# 0101 has FLAG_C or has FLAG_B', function () {
    let flags = parseInt('0101', 2);
    assert.ok(flags | FLAG_C || flags | FLAG_B);
  });
  it('# 0110 has FLAG_C or FLAG_B', function () {
    let mask = FLAG_C | FLAG_B;
    let flags = parseInt('0110', 2);
    assert.ok(flags & mask);
  });
});
