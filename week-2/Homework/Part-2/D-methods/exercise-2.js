
let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) { return (this.currentAddress = newAddress)},
    celebrateBirthday: function () { return(this.age = this.age + 1)}
};

console.log(person.changeAddress("san bosco"));
console.log(person.celebrateBirthday());