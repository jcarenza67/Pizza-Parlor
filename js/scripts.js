// Business Logic for Pizza Types
function Pizza (toppings = [], crusts =[], sizes){
  this.toppings = toppings
  this.sizes = sizes
  this.crusts = crusts
}

const yourPizza = new Pizza({
  toppings: ["mushrooms", "artichokes"],
  sizes: "xtra large"
})