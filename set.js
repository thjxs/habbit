const set1 = new Set([1, 5])
const o = {a: 1, b: 2}
set1.add(o)
set1.add({a: 1, b: 2})
console.log(set1)
o.a = 'yellow'
console.log(set1)
