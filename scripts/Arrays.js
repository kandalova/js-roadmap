let arr1 = new Array();
let arr = [];

console.log(typeof arr1);

//fruits[fruits.length-1] == fruits.at(-1)

arr.age=25;
console.log(arr);
arr.push(1);
console.log(arr);

let fruits = ["Яблоко", "Апельсин", "Груша"];

for (let key in fruits) {//bad id - array has property
  console.log( fruits[key] ); // Яблоко, Апельсин, Груша
}

for (let value of fruits) {//bad id - array has property
  console.log( value ); // Яблоко, Апельсин, Груша
}

//arr.length = 0; - change length (clear in this case)

//Массивы не имеют ни Symbol.toPrimitive, ни функционирующего valueOf, 
//они реализуют только преобразование toString, таким образом, здесь [] становится пустой строкой, [1] становится "1", а [1,2] становится "1,2".

console.log(String(fruits));

let arrR = ["a", "b"];

arrR.push(function() {
  console.log( this );
})

arrR[2]();
//splice - delete, insert, change don't crete new
let doing = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
doing.splice(1,1);
console.log(doing);
doing.splice(0,2, "Go", "dance")
console.log(doing);
//slice - copy
//concat - new array from diffrent places (arguments)
//foreach - перебор
//indexOf/lastIndexOf и includes - search (like for strings)
//find и findIndex
//find first item
//filter - all items
//map returns new arr
//sort(fn) - return arr itself not new
// arr.reverse
//split и join
//let result = arr.reduce((sum, current) => sum + current, 0);
//Метод arr.reduceRight работает аналогично, но проходит по массиву справа налево.
//Array.isArray(value). becouse typeof {} object
//Почти все методы массива, которые вызывают функции – такие как find, filter, map, за исключением метода sort, принимают необязательный параметр thisArg.
//thisArg - contexr, this
//Array.from  - pseudo arrays/iterrable objects -> array

//sort, reverse и splice изменяют исходный массив.

//iterrable objects
//by Symbol.iterator - need a fn
//for..of.. works

//pseudo arrays
//has indexes and length prop
//for..of.. doesn't works without Symbol.iterator