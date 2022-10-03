let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);
console.log('\u{20331}');
console.log(`My\n`.length);

let str = `Hello`;

console.log( str[0] ); 
console.log( str.charAt(0) ); 
console.log( str.charAt(10) );
console.log( str[10] );

for (let char of "Hello") {
  console.log(char);
}

str[0] = 'h';//dont work
console.log(str);

////indexOf/lastIndexOf и includes - search