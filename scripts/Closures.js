//closure - a moment, when a fn has access to vars from her upper scope
//it's when a fn closures values inside itself from upper scope

function sayHelloTo(name) {
	const message = 'Hello ' + name;
	return function () {//this fn has access to upper scope vars- sayHelloTo
		console.log(message);
	}
}

const helloToElene = sayHelloTo('Elena');
console.log('helloToElene', helloToElene);
console.log(helloToElene()); // Hello Elena and underfined
//underfined becouse of ananymus fn - it don't return anathing -> undefined returns;
helloToElene(); // just Hello, without undefined

function createFrameworkManager() {
	const fw = ['react', 'angular'];

	return {
		print: function () {
			console.log(fw);
		},
		add: function (framework) {
			fw.push(framework);
		}
	}
}

const manager = createFrameworkManager();
console.log(manager);
// console.log(fw); //error
//but we can use fw:
manager.add('Vue');
manager.print();

const fib = [1, 2, 3, 5, 8, 13];
for (var i = 0; i < fib.length; i++) {
	setTimeout(function () {
		console.log(`fib[${i}] = ${fib[i]}`);
	}, 1500)
}
//will be print fib[6] = undefined for all
//we have one i that changes like ref and "for" do it fast - before timeout

//fix #1 - use let, it's exist only inside block scope

for (let i = 0; i < fib.length; i++) {
	setTimeout(function () {
		console.log(`fib[${i}] = ${fib[i]}`);
	}, 1500)
}

//fix #2 - use closure

for (var i = 0; i < fib.length; i++) {
	(function (j) {
		setTimeout(function () {
			console.log(`fib[${j}] = ${fib[j]}`);
		}, 1500)
	})(i);
}

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi()

function spy(func) {

  function wrapper(...args) {
    // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
console.log(work.calls);