
let person = {
    name: "Alice",
    age: 25,
    greet: function (){ return(`Hello everybody`)},
    sayName: function (){ return(`My name is ${this.name}`)}
  };
  
  console.log(`Expected result: Hello everybody. Actual result: ${person.greet()}`);
  console.log(`Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`);