
let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) { this.currentAddress = newAddress;},
    celebrateBirthday: function () { this.age = this.age + 1;}
};

person.changeAddress("Edinburgh");
console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);

person.celebrateBirthday();
console.log(`Expected result: 26. Actual result: ${person.age}`);