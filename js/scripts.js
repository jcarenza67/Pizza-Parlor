function Pizza (specials = "", crust = "", size = "", toppingPrices = {}) {
  this.specials = specials;
  this.size = size;
  this.crust = crust;
  this.toppingPrices = toppingPrices;
  this.basePrice = 0;
}

const specialtyToppings = {
  "Pepperoni lovers": 10.75,
  "Margherita": 9.99,
  "Vegetarian": 11.50,
  "Meat lovers": 13.50,
  "Hearty artichoke": 10.50,
  "Shroom pie": 9.50
};

const crusts = {
  "Thin and Crispy": 5,
  "Original": 7,
  "Hand Tossed": 8.25,
  "Deep Dish": 10
};

const sizes = {
  "Personal": 7,
  "Medium": 9,
  "Large": 10.50,
  "Xtra Large": 12

};

Pizza.prototype.getPrice = function() {
  let totalPrice = this.basePrice;
  
  if (crusts.hasOwnProperty(this.crust)) {
    totalPrice += crusts[this.crust];
  }
  
  if (sizes.hasOwnProperty(this.size)) {
    totalPrice += sizes[this.size];
  }
    
  if (specialtyToppings.hasOwnProperty(this.specials)) {
    totalPrice += specialtyToppings[this.specials];
  }
  
  return totalPrice;
};






window.addEventListener("load", function(){
  const crustSelect = document.getElementById("crust-select");
  const sizeSelect = document.getElementById("size-select");
  const toppingSelect = document.getElementById("topping-select");
  const cartButton = document.getElementById("cart");
  const summaryDiv = document.getElementById("summary");
  const pizzaCrust = document.getElementById("crust-summary");
  const pizzaSize = document.getElementById("size-summary");
  const pizzaTopping = document.getElementById("toppings-summary");
  const totalPrice = document.getElementById("price-summary");

  const inCart = false;

  function addToCart(event){
    event.preventDefault();



    const selectedCrust = crustSelect.value;
    const selectedSize = sizeSelect.value;
    const selectedTopping = toppingSelect.value;
    

    const pizza = new Pizza(selectedTopping, selectedCrust, selectedSize, specialtyToppings); 

    pizzaCrust.textContent = "Crust: " + pizza.crust;
    pizzaSize.textContent = "Size: " + pizza.size;
    pizzaTopping.textContent = "Selected Specialty Pizza: " + pizza.specials;
    totalPrice.textContent = "Total: $" + pizza.getPrice().toFixed(2);

    summaryDiv.classList.remove("hidden");

    if(inCart) {
      cartButton.textContent = "Add to cart";
    } else {
      cartButton.textContent = "Update cart";
    }
  }
    
  if(cartButton){
    cartButton.addEventListener("click", addToCart);
  
  }
});
