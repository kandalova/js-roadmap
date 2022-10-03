function Cat(color, name) {
	this.color = color; 
	this.name = name;

}

const cat = new Cat('black', 'Catty');
console.log(cat);

function myNew(consrtuctor, ...args){
	const obj = {};
	Object.setPrototypeOf(obj, consrtuctor.prototype);
	return consrtuctor.apply(obj, args) || obj;
}

const newCat = myNew(Cat, 'grey', 'Kitty');
console.log(newCat);

const catWrong = Cat(); //wrong
console.log(catWrong);

//constructors - create several objects

function User(name) {
	console.log(new.target);
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}

User();//underfind;
new User(); //function User

//new Number(1) or new Boolean(false) create objects! 
//Number(1) - conversion, it's usefull