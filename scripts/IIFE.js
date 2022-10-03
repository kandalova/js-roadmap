//Immediate invoke function expression
//uses for local scope

let result=[];
for (var i = 0; i < 5; i++) {
	result.push(function(){
		console.log(i);
	})
}

result[1]();//5
result[4]();//5 - the same issue from Closure.js

let newResult = [];
for (var i = 0; i < 5; i++) {
	(function(){
		var j = i;
		newResult.push(function() { console.log(j); })
	})();
}

newResult[2]();