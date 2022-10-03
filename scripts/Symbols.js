// symbol - uniqe id
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false
console.log(id1); //Symbol('id')
console.log(id1.description); //id

let user = {
  name: "Вася"
};

let id = Symbol("id");
user[id] = 1;
console.log( user[id] );
console.log( user );

//or
let otherID = Symbol("otherID");
let newUser = {
	name: "vasya",
	[otherID]: 1,
}
console.log(newUser);
console.log(newUser.hasOwnProperty(otherID));
console.log(otherID in newUser);
console.log(newUser[otherID]);

for (let key in newUser) console.log(key); // id aren't printed
console.log(Object.keys(newUser)); // not prented

console.log(Object.assign({}, newUser));

//Symbol.for(key) - read from global register (реестр)
// читаем символ из глобального реестра и записываем его в переменную
let idd = Symbol.for("idd"); // если символа не существует, он будет создан
// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("idd");
// проверяем -- это один и тот же символ
console.log( idd === idAgain ); // true
//get key from global
let key = Symbol.for("key");
console.log(Symbol.keyFor(idAgain));
console.log(Symbol.keyFor(key));
