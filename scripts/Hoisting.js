//hoisting - interpretator raises up declaration for vars and funcs to the top of the file (not initialization)

// it will be work - call function before declaration
console.log(sum(1,41));

function sum(a,b) {
	return a+b;
}

var i;
console.log('i', i); //underfined but not error(it exist but not defined)
// var i = 42;// the same for this line
i=42;
console.log('i', i);//42

//const and let are NOT HOSTED
// console.log('num', num); // ERROR Cannot access 'num' before initialization
// const num = 42;
let num = 42;
console.log('num', 42);

//function expression & function declaration
//declaration way
console.log(square(25)); // will work
function square(num) {
	return num ** 2;
}
//expression way
// console.log(squareB(25)); // will not work: squareB is not a function
// console.log(squareC(25)); // will not work: Cannot access 'squareC' before initialization
var squareB = function(num) {
	return num ** 2;
}
const squareC = function(num) {
	return num ** 2;
}

//not declared but initialized - become global
function hoist() {
  x = 20;
  var y = 100;
}

hoist();
console.log(x); // will work and now it's global var
// console.log(y); // will not work work, y inside scope

