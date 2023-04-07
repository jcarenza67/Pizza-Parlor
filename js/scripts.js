// Business Logic for Pizza Types
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





//UI logic
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

  function addToCart(event){
    event.preventDefault();



    const selectedCrust = crustSelect.value;
    const selectedSize = sizeSelect.value;
    const selectedTopping = toppingSelect.value;

    const pizza = new Pizza(Array.from(selectedTopping, option => option.value), selectedCrust, selectedSize, toppings); 

    pizzaCrust.textContent = "Crust: " + pizza.crust;
    pizzaSize.textContent = "Size: " + pizza.size;
    pizzaTopping.textContent = "Selected Toppings:";
    for (let i = 0; i < pizza.toppings.length; i++) {
      const topping = pizza.toppings[i];
      const toppingElement = document.createElement("p")
      if(toppings[topping] != undefined){
        toppingElement.textContent = "- " + topping + ": $" + toppings[topping].toFixed(2);
        pizzaTopping.appendChild(toppingElement);
      }
    }
    totalPrice.textContent = "Total: $" + pizza.getPrice().toFixed(2);

    summaryDiv.classList.remove("hidden");
  }

  if(cartButton){
    cartButton.addEventListener("click", addToCart);
  }
  });
