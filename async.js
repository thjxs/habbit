function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var add = async function(x) {
  var a = await resolveAfter2Seconds(22);
  var b = await resolveAfter2Seconds(23);
  return x + a + b;
};

add(10).then(v => {
  console.log(v);
});

var addLoop = async function(length) {
  let x = 0;
  for (let i = 0; i < length; i += 1) {
    x += await resolveAfter2Seconds(i);
  }
  return x;
};

addLoop(5).then(console.log);
