//context defines how fn was called and points on key word "this" in the current code part
//call apple bind

const person = {
	surname: "Stark",
	knows: function(what, name){
		console.log(`You knows ${what}, ${name} ${this.surname}`);
		//this will be simillar with person 
		//because fn "knows" created it own context
		//but have already created in the person context
	}
}

const john = {
	surname: 'Snow'
}
person.knows('all', 'Bran');

//форсированная передача контекста 
//force context given?

//call - call fn with context from first param in brackets, 
//other params - needed for fn
person.knows.call(john, 'nothing', 'John');
//apply - the same but has only 2 params, first - context. second - params array
person.knows.apply(john, ['nothing', 'John']);
//es6 feature
person.knows.call(john, ...['nothing', 'John']);
//bind - dont call, but create new fn
person.knows.bind(john, 'nothing at all', 'John')();
const bound = person.knows.bind(john, 'nothing at all', 'John');
bound();

//class es5
function Person(name, age){
	this.name = name;
	this.age = age;
	console.log('class', this);
}
//in es6 - we can create from new

const elena = new Person('Elena', 20);

//binding - give some context

// explicit bindind (явный)
function logThis(){
	console.log(this);
}
const obj = {num:42};
logThis.apply(obj);

//inplicit binding (неявно)
const animal ={
	legs: 4,
	logThis: function(){
		console.log(this);
	}
}

animal.logThis();

//function() - create own context
//but arrow fn - not, use parent

function Cat(color){
	this.color = color;
	console.log('this', this);
	(()=>console.log('arrow this', this))();
}

new Cat('red')

function f() {
  console.log(this ); // ?
}

f()