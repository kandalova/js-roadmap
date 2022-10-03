// primitive types are transferred like values
// obj (+ arr and func are composite (or reference)
let x = 42;
let y = x;
console.log('x', x);
console.log('y', y);

a = [1,2,3];
let b = a; //copy by ref
// let b = a.concat(); // clone of arr
b.push(4);
let c = [1,2,3,4]
console.log('a', a);
console.log('b', b);
console.log('a===b', a===b);
console.log('a===c', a===c);
