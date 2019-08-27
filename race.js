function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for(let i = seconds; i >= 0; i -= 1) {
            setTimeout(function() {
                if(i == 0) {
                    resolve(seconds);
                }
            }, (seconds - i) * 1000);
        }
    });
}

Promise.race([countdown(3), countdown(5)]).then(value => {
    console.log(value);
});
