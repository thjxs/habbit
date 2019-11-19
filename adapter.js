// call the provider function fn, with up to n arguments
const ary = (fn, n) => (...args) => fn(...args.splice(0, n));

const call = (key, ...args) => context => context[key](...args);

const collectInto = fn => (...args) => fn(args);

const flip = fn => (first, ...rest) => fn(...rest, first);

const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));

const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));

const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));

const spreadOver = fn => argsArr => fn(...argsArr);

const unary = fn => val => fn(val);

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
  fnPromise,
  pipeAsyncFunctions,
  pipeFunctions,
  rearg,
  spreadOver,
  unary
};
