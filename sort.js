function sort (array) {
  for(let j = 1; j < array.length; j += 1) {
    let key = array[j];
    let i = j - 1;
    while(i >= 0 && array[i] > key) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = key;
  }
}
function asort (array) {
  sort(array);
  array.reverse();
}

module.exports = {
  sort,
  asort
};
