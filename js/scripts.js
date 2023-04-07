// Business Logic for Pizza Types
function Pizza (toppings = [], crust = "", size = "", toppingPrices = {}) {
  this.toppings = toppings;
  this.size = size;
  this.crust = crust;
  this.toppingPrices = toppingPrices;
  this.basePrice = 0;
}

const toppings = {
  "pepperoni": 1.75,
  "sausage": 2,
  "canadian bacon": 1.50,
  "green peppers": 0.50,
  "artichokes": 0.50,
  "mushrooms": 0.50
};

const crusts = {
  "thin and crispy": 5,
  "original": 7,
  "hand tossed": 8.25,
  "deep dish": 10
};

const sizes = {
  "personal": 7,
  "medium": 9,
  "large": 10.50,
  "xtra large": 12

};

Pizza.prototype.getPrice = function() {
  let totalPrice = this.basePrice;
  
  if (crusts.hasOwnProperty(this.crust)) {
    totalPrice += crusts[this.crust];
  }
  
  if (sizes.hasOwnProperty(this.size)) {
    totalPrice += sizes[this.size];
  }
  
  for (let i = 0; i < this.toppings.length; i++) {
    const topping = this.toppings[i];
    
    if (toppings.hasOwnProperty(topping)) {
      totalPrice += toppings[topping];
    }
  }
  
  return totalPrice;
};

