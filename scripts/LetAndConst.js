//let, const - inside block scope
//var - onlu func or script scope, available in oiu of block scope

//let
let a = 'Var a';
let b = 'Var b';

//from es6 block scope {}:
{
	a = 'New var a';
	let b = 'local var b';
	console.log('scope a',a);
	console.log('scope b',b);
	// console.log('scope c', c); will be error
	let c = 'var c';
}

console.log('global a', a);
console.log('global b', b);
// console.log('global c', c);//will not work

//const
const PORT=8080;
// PORT=200; //will be error
const arr = ['a', 'b', 'c'];
arr.push('d');
arr[0] = 'A';
console.log(arr);
// arr = ''; // error

const obj = {};
obj.name = 'Name';
obj.age = 22;
console.log(obj);
delete obj.age;
console.log(obj);
// obj = 'new value'; //will be error