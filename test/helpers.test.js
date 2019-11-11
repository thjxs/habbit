const assert = require('assert');
const helpers = require('../helpers');

describe('# helpers isValidXss', function () {
  it('should detect script tags', () => {
    assert.strictEqual(helpers.isValidXss("<script/xss>alert('blah')</script/xss>"), true);
    assert.strictEqual(helpers.isValidXss("<SCRIPT>alert('getting your password')</SCRIPT>"), true);
    assert.strictEqual(helpers.isValidXss("<script src='http://xssinjections.com/inject.js'>xss</script>"), true);
    assert.strictEqual(helpers.isValidXss("<img src='/' onerror='javascript:alert('xss')'>xss</script>"), true);
    assert.strictEqual(helpers.isValidXss("<script>console.log('XSS')</script>"), true);
    assert.strictEqual(helpers.isValidXss("onerror=alert('XSS')"), true);
  });
  it('should not detect non script tags', function () {
    assert.strictEqual(helpers.isValidXss("/one/?foo=bar"), false);
    assert.strictEqual(helpers.isValidXss("<safe> tags"), false);
    assert.strictEqual(helpers.isValidXss("<safetag>"), false);
    assert.strictEqual(helpers.isValidXss(">>> safe <<<"), false);
    assert.strictEqual(helpers.isValidXss("<<< safe >>>"), false);
    assert.strictEqual(helpers.isValidXss("my script rules"), false);
    assert.strictEqual(helpers.isValidXss("<a notonlistener='nomatch'>"), false);
    assert.strictEqual(helpers.isValidXss("<h2>MyTitle</h2>"), false);
    assert.strictEqual(helpers.isValidXss("<img src='#'/>"), false);
  });
});
