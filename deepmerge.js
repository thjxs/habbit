function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

module.exports = function deepmerge(target, source, options = { clone: true }) {
  const output = options.clone ? { ...target } : target;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === '__proto__') {
        return;
      }

      if (isObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
};
