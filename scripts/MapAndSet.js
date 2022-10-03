/*
Объекты для хранения именованных коллекций.
Массивы для хранения упорядоченных коллекций.
Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
*/

let map = new Map();

map.set("1", "str1");
map.set(1, "num1"); 
map.set(true, "bool1"); 
console.log(map);
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"
console.log(map.size); // 3
console.log(map.has(1));
map.delete(1)
console.log(map.has(1));
map.clear();
console.log(map);
let john = { name: "John" };
map.set(john, 123);
console.log(map);

map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

console.log(map);

let obj = {
  name: "John",
  age: 30
};
map = new Map(Object.entries(obj));
console.log(map);

console.log(Object.fromEntries(map.entries()));
console.log(Object.fromEntries(map));

map.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});


let set = new Set();
john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set);

let newSet = new Set(["апельсин", "яблоко", "банан"]);

for (let value of newSet) console.log(value);

newSet.forEach((value, valueAgain, set) => {
  console.log(value);
});

/*
.values() – values[{}]
.keys() – keys[{}] / values[{}] (map/set)
.entries() – [{key, value}] / [{value, value}]
*/

//WeakMap -> key must be object
//WeakMap - clraner will be clean map entry if there are not refs to he
//Map -> cleaner not clean entry while map exist
//hasn't  keys(), values(), entries(), size
//only get, set, delete, has

let john1 = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john1, "...");
john1 = null; // перезаписываем ссылку на объект
// объект john удалён из памяти!

//the same for WeakSet