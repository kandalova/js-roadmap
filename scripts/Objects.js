const me = {
	name: "Leyla",
	"skin color": "white",
	0: 0,
	skills: ["js", "html"]
}

console.log(me.name);
console.log(me["skin color"]);
console.log(me[0]);

const myProto = {type: "human"};

me.__proto__=myProto;

console.log(me);
console.log(me.__proto__);
console.log(me.type);

delete me.type;
console.log(me);
console.log(me.__proto__);
console.log(me.type);

const newMe = me;
console.log(newMe === me);
newMe.country = "Armenia";
console.log(me.country);

const myClone = Object.assign({}, me);
console.log(myClone === me);
myClone.skills.push("SAP");
console.log(me.skills);

let user = null;
let x = 0;
user?.sayHi(x++); // нет "user", поэтому выполнение не достигает вызова sayHi и x++
console.log(x); 
console.log(user?.address);

//iterrable objects
//by Symbol.iterator - need a fn
//for..of.. works

//pseudo arrays
//has indexes and length prop
//for..of.. doesn't works without Symbol.iterator

//Array.from - pseudo arrays/iterrable objects -> array

//Object.fromEntries([key,value])

/*
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
*/