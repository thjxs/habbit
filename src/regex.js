function removeFirstOrLastSpaces(str) {
  const reg = /^\s*|\s*$/gm;
  return str.replace(reg, '');
}

module.exports = {
  removeFirstOrLastSpaces,
};
