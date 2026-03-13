import { strictEqual } from 'assert';
import { isValidXss } from '../src/helpers';

describe('# helpers isValidXss', function() {
  it('should detect script tags', () => {
    strictEqual(
      isValidXss("<script/xss>alert('blah')</script/xss>"),
      true
    );
    strictEqual(
      isValidXss("<SCRIPT>alert('getting your password')</SCRIPT>"),
      true
    );
    strictEqual(
      isValidXss(
        "<script src='http://xssinjections.com/inject.js'>xss</script>"
      ),
      true
    );
    strictEqual(
      isValidXss(
        "<img src='/' onerror='javascript:alert('xss')'>xss</script>"
      ),
      true
    );
    strictEqual(
      isValidXss("<script>console.log('XSS')</script>"),
      true
    );
    strictEqual(isValidXss("onerror=alert('XSS')"), true);
  });
  it('should not detect non script tags', function() {
    strictEqual(isValidXss('/one/?foo=bar'), false);
    strictEqual(isValidXss('<safe> tags'), false);
    strictEqual(isValidXss('<safetag>'), false);
    strictEqual(isValidXss('>>> safe <<<'), false);
    strictEqual(isValidXss('<<< safe >>>'), false);
    strictEqual(isValidXss('my script rules'), false);
    strictEqual(
      isValidXss("<a notonlistener='nomatch'>"),
      false
    );
    strictEqual(isValidXss('<h2>MyTitle</h2>'), false);
    strictEqual(isValidXss("<img src='#'/>"), false);
  });
});
