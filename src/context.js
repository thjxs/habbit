function createFunc(func) {
  return function () {
    return func.apply(this, arguments);
  };
}

module.exports = {
  createFunc,
};
