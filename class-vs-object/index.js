
window.arr = [];

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

console.time('cost');
for (let idx = 0; idx < 100000; idx++) {
  arr.push(new Person('aa', 23));
}
console.timeEnd('cost');


// ---- vs. ----


window.arr = [];

console.time('cost');
for (let idx = 0; idx < 100000; idx++) {
  arr.push({ name: 'aa', age: 23 });
}
console.timeEnd('cost');
