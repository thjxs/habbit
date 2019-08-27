const assert = require('assert');
it('#async', (done) => {
    Promise.race([Promise.resolve(3), Promise.reject(5)]).then(value => {
        assert.strictEqual(value, 3);
        done();
    });
});

function delay(seconds) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(seconds);
        }, seconds * 1000);
    });
}

it('#async 6 3', (done) => {
    Promise.race([delay(6), delay(3)]).then(value => {
        assert.strictEqual(value, 3);
        done();
    });
});
