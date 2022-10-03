
let person = {
    name: "Alice",
    friends: ["John", "Nina"],
    makeFriend: function (friend){
      this.friends.push(friend);
    }
  };
  
  person.makeFriend("Bob");
  
  console.log(`Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`);