//scope it's something that says us about accesability of some variables in functions
// global scope:
//vars are out of any fn but are available inside all fn, that is declarated in this scope
//exmple: document or window are in global scope
//local scope:
//var is available for and inside one fn and her childs
//scope points on availability of vars ()

//gloabal func
function funcA(){
	let a = 1;

	function funcB(){
		let b = 2;
		let c = 10;

		function funcC() {
			let c = 3;

			console.log('funcC', a,b,c);
		}

		function funcD() {
			var d = 4;
			console.log('funcD', a,b,d,c);
		}

		funcC();
		funcD();
		console.log('funcB', a, b);
	}


	funcB();
	console.log('funcA', a);
}

funcA();