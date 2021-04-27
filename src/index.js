const ct = require('./context');

function retx(x) {
  console.log(this, arguments);
  console.log(this.y);

  return x;
}

this.y = 42;
rx = ct.createFunc(retx);

console.log(rx(12));
