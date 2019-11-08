// call the provider function fn, with up to n arguments
const ary = (fn, n) => (...args) => fn(...args.splice(0, n));

const call = (key, ...args) => context => context[key](...args);

const collectInto = fn => (...args) => fn(args);

const flip = fn => (first, ...rest) => fn(...rest, first);

const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));

const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));

// error first
const fnPromise = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

module.exports = {
  ary,
  call,
  collectInto,
  flip,
  over,
  overArgs,
  fnPromise
};
