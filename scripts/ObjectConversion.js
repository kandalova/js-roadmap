let a = {a:'a'};
let b = {a:'a', b: 'b'};
console.log(a); // to string
console.log(a+b);
console.log(a-b);
//to bollean - all objects - true
console.log(!{});
console.log(!{a:'a'});


//Все встроенные объекты, за исключением одного (объект Date, который мы рассмотрим позже), 
//реализуют "default" преобразование тем же способом, что и "number". И нам следует поступать так же.


let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// демонстрация результатов преобразований:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

console.log(user.valueOf());
console.log(user.toString());
