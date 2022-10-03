"use strict"
const BEFORE_START_VAR = "I know it before start";
let afterStartVar = 5+5;
alert("This is the alert from file");
let result = prompt("Its prompt, enter anything", "MyDefaultValue");
console.log('You entered in the prompt: ', result);
let isBoss = confirm("Are you boss?");
console.log('Your boss answer: ', isBoss);
console.log('________________');
console.log('Vars naming');
console.log('BEFORE_START_VAR:', BEFORE_START_VAR);
console.log('afterStartVar:', afterStartVar);
console.log('________________');
console.log('Get "use strict" error when there is undefines var:');
num=5;