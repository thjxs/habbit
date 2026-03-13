import { strictEqual } from 'assert';
function test(p) {
  return p;
}

let defaultValue = 12;

function testParametersWithDefaultValue(p) {
  p = p || defaultValue;
  return p;
}

describe('#function paramaters', function() {
  it('#input p', function() {
    strictEqual(test(1), 1);
  });
  it('#test parameters with default value', function() {
    strictEqual(testParametersWithDefaultValue(), defaultValue);
  });
});
