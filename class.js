class Car{
    constructor() {
      this.arr = []
    }
}

Car.prototype.condition = [];

const a = new Car()
a.condition.push('test')
a.arr.push('1')
const b = new Car()
b.condition.push('???')
b.arr.push('2')
console.log(a.condition, a.arr, b.arr, b.condition);
