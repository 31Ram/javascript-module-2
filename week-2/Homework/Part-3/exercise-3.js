let coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0,
  },
  insertedAmount: 0,
  insertMoney: function (amount) {
    this.insertedAmount = amount;
  },
  getCoffee: function (coffee) {
    if (this.insertedAmount>=this.prices[coffee]) {
      return(`Please take your ${coffee}`);
    } else {
      return(`Sorry you don't have enough money for a ${coffee}`)
    }
  },
};

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
    "cappuccino"
  )}`
);

coffeeMachine.insertMoney(1.5);
console.log(
  `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
    "blackCoffee"
  )}`
);

coffeeMachine.insertMoney(4.0);
console.log(
  `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);
