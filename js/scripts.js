// Business Logic for Pizza Types
function Pizza (toppings = [], crust = "", size = "", toppingPrices = {}) {
  this.toppings = toppings;
  this.size = size;
  this.crust = crust;
  this.toppingPrices = toppingPrices;
  this.basePrice = 0;
}

const toppings = {
  "pepperoni": 0.75,
  "green peppers": 0.50,
  "artichokes": 0.50
};

const crusts = {
  "thin and crispy": 5
};

const sizes = {
  "medium": 9
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
}

