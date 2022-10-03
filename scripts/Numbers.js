console.log(9e5);//10
console.log(9e-5);//10
console.log(0xff);//16
console.log(0b11111111);//2
console.log(0o377);//8

let num = 16;
console.log(num.toString(10));
console.log(num.toString(16));
console.log(num.toString(2));
console.log(num.toString(8));
// console.log(15.toString(8));//error
console.log(15..toString(8));
console.log((15).toString(8));

console.log(0.1+0.2);
console.log((0.1+0.2).toFixed(2));//it's string
console.log(typeof (0.1+0.2).toFixed(2));
console.log(typeof +(0.1+0.2).toFixed(2));

console.log(NaN === NaN);
console.log(NaN == NaN);
console.log(isNaN(NaN));
console.log(isFinite('15'));//not NAN , not  +- infinity
console.log(isFinite(''));// ''->0

console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5
console.log( parseInt('12.3') ); // 12, вернётся только целая часть
console.log( parseFloat('12.3.4') ); // 
console.log( parseInt('0xff', 16) ); //

console.log( "\u{1F60D}" );