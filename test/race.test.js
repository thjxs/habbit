const assert = require('assert');
it('#async', (done) => {
  Promise.race([Promise.resolve(3), Promise.reject(5)]).then((value) => {
    assert.strictEqual(value, 3);
    done();
  });
});

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(ms);
    }, ms);
  });
}

it('#async 6 3', (done) => {
  Promise.race([delay(3), delay(1)]).then((value) => {
    assert.strictEqual(value, 1);
    done();
  });
});
