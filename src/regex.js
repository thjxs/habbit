function removeFirstOrLastSpaces(str) {
  const reg = /^\s*|\s*$/gm;
  return str.replace(reg, '');
}

function addACommaInThousands(str) {
  const reg = /\B(?=(\d{3})+$)/g;
  return str.replace(reg, ',');
}

module.exports = {
  addACommaInThousands,
  removeFirstOrLastSpaces,
};
