function createFunc(func) {
  return function() {
    return func.apply(this, arguments);
  };
}

export default {
  createFunc,
};
