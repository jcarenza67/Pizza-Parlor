// Business Logic for Pizza Types
function Pizza (toppings = [], crusts =[], sizes =[]){
  this.toppings = toppings
  this.sizes = sizes
  this.crusts = crusts
}

const yourPizza = new Pizza({
  toppings: ["mushrooms", "artichokes", "green pepper", "sausage", "pepperoni"],
  sizes: ["personal", "medium", "large", "xtra large"],
  crusts: ["original", "thin and crispy", "hand tossed", "deep dish"]
});

Pizza.prototype.getPrice = function(){
  let totalPrice = this.basePrice
}