function Pizza (toppings, crust, size, toppingPrices, crusts, sizes, name) {
  this.toppings = toppings;
  this.size = size;
  this.crust = crust;
  this.toppingPrices = toppingPrices;
  this.crusts = crusts;
  this.sizes = sizes;
  this.name = name;
}

Pizza.prototype.getPrice = function() {
  let totalPrice = 0;

  if (this.crust in this.crusts) {
    totalPrice += this.crusts[this.crust];
  }
  
  if (this.size in this.sizes) {
    totalPrice += this.sizes[this.size];
  } else {
    totalPrice += 100;
  }

  if (this.toppings.length > 0) {
    for (let i = 0; i < this.toppings.length; i++) {
      const topping = this.toppings[i];
      if (topping in this.toppingPrices) {
        totalPrice += this.toppingPrices[topping];
      }
    }
  }
  
  return totalPrice;
};

Pizza.prototype.validateName = function() {
  if(this.name.length < 4) {
    this.name = "invalid name";
    return;
  }
};





window.addEventListener("load", function(){
  const crustSelect = document.getElementById("crust-select");
  const sizeSelect = document.getElementById("size-select");
  const toppingCheckboxes = document.querySelectorAll(".topping-checkbox");
  const cartButton = document.getElementById("cart");
  const summaryDiv = document.getElementById("summary");
  const pizzaCrust = document.getElementById("crust-summary");
  const pizzaSize = document.getElementById("size-summary");
  const pizzaTopping = document.getElementById("toppings-summary");
  const totalPrice = document.getElementById("price-summary");

  const inCart = false;

  const toppingPrices = {
    "Pepperoni": 1.50,
    "Mushrooms": 1.00,
    "Olives": 1.25,
    "Onions": 0.75,
    "Peppers": 0.50,
    "Anchovies": 2.00
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

  function addToCart(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const errorMessage = document.getElementById("error-message");
    const selectedCrust = crustSelect.value;
    const selectedSize = sizeSelect.value;
    const selectedToppings = [];
    
    if(selectedCrust === "-----Choose-----" || selectedSize === "-----Choose-----"){
      errorMessage.textContent = "!! Please select a crust and size !!";
      errorMessage.style.display = "block";
      return;
    }

    if(name.length < 4) {
      errorMessage.textContent = "!! Please enter a valid name, with at least 4 characters !!";
      errorMessage.style.display = "block";
      return;
    } 
    let noToppingsChecked = true;
    for (let i = 0; i < toppingCheckboxes.length; i++) {
      const checkbox = toppingCheckboxes[i];
      if (checkbox.checked) {
        selectedToppings.push(checkbox.value);
        noToppingsChecked = false;
      }
    }

    if (noToppingsChecked) {
      errorMessage.textContent = "!! Please select at least one topping !!";
      errorMessage.style.display = "block";
      return;
    }
  
  
    const pizza = new Pizza(selectedToppings, selectedCrust, selectedSize, toppingPrices, crusts, sizes); 

    pizzaCrust.textContent = "Crust: " + pizza.crust;
    pizzaSize.textContent = "Size: " + pizza.size;
    pizzaTopping.textContent = "Selected Toppings: " + pizza.toppings.join();
    totalPrice.textContent = "Total: $" + pizza.getPrice().toFixed(2);

    summaryDiv.classList.remove("hidden");

    if(inCart) {
      cartButton.textContent = "Add to cart";
    } else {
      cartButton.textContent = "Update cart";
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "none";
    }
    
    
  }
    cartButton.addEventListener("click", addToCart);
    
  
});
