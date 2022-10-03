//#1
//each obj has prototype from parent
//__proto__ es6
// Object.getPrototypeOf()

//#2
// property prototype for functions
//give this props for new instance created with new

function Cat(name, color){
	this.name =name;
	this.color = color;
}

Cat.prototype.voice = function(){
	console.log(this.name + ' myau');
}

const cat = new Cat('Kot', 'white');

cat.voice();
console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__);
console.log(cat.constructor);

function Person(){}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';
const person = new Person();
person.name = 'Vladlen';

console.log('skin' in person);
console.log(person.legs);
console.log(person.eyes);
console.log(person.name);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('skin'));

//Object create - create obj using prototype
let proto = {year:2019};
const myYaer = Object.create(proto);

console.log(myYaer.year);
console.log(myYaer.hasOwnProperty('year'));
console.log(myYaer.__proto__ === proto);

proto.year = 2200;

console.log(myYaer.year);

proto = {hello: 'hello'} // not change
console.log(myYaer.__proto__);

const PrototypeOfParentClass = {
	one: 1
}

function ChildClass() {
	this.one = -1
}

ChildClass.prototype = Object.create(PrototypeOfParentClass)

const child = new ChildClass()
console.log(child.one);
// child.one === -1 // true ?

delete child.one
// child.one === ?=
console.log(child.one);
