# Pizza Parlor

#### By _**Joseph Wilfong**_

## Technologies Used

* _HTML_
* _CSS_
* _JAVASCRIPT_
* _TDD_

## Description

_A web application that simulates a real Pizza company where users can order specialty pizzas with different crusts and different sizes_

***The navbar and checkout button are decoration only***

## Links

[This is the link to the Github repository](https://github.com/jcarenza67/Pizza-Parlor) 

## Setup/Installation Requirements

* _Click the link provided above_
* _Click the green dropdown button that says "Code"_
* _Copy the repository HTTPS, clone it to your Desktop directory by typing ***git clone***, paste the copied URL right after **clone**, and then press enter_
* _Open the **index.html** in your browser_

## Tests
  ```
  Describe: Pizza ()

  Test: "It should return a Pizza object with  two properties for toppings and size"
  Code: const yourPizza = new Pizza (["mushrooms", "artichokes"], "xtra large"); 
  Expected Output: Pizza {toppings: ["mushrooms", "artichokes"], size: "xtra large"}

  Test: "It should return a Pizza object with one more property added for crusts with multiple options and also more size and topping options"
  Code: const yourPizza = new Pizza(["mushrooms", "artichokes", "green pepper", "sausage", "pepperoni"], ["personal", "medium", "large", "xtra large"], ["original", "thin and crispy", "hand tossed", "deep dish"]);
  Expected Output: Pizza {toppings: ["mushrooms", "artichokes", "green pepper", "sausage", "pepperoni"], sizes: ["personal", "medium", "large", "xtra large"], crusts: ["original", "thin and crispy", "hand tossed", "deep dish"]};

  Describe: Pizza.prototype.getPrice()

  Test: "It should increase the price by $5 if the user selects a Thin and Crispy crust"
  Code: const pizza = new Pizza("Thin and Crispy");
  Expected Output: 5

  Test: "It should increase the price by $7 if the user selects a Original crust"
  Code: const pizza = new Pizza("Original");
  Expected Output: 7

  Test: "It should increase the price by $8.25 if the user selects a Hand Tossed crust"
  Code: const pizza = new Pizza(Hand Tossed");
  Expected Output: 8.25

  Test: "It should increase the price by $10 if the user selects a Deep Dish crust"
  Code: const pizza = new Pizza("Deep Dish");
  Expected Output: 10

  Test: "It should increase the price by $7 if the user selects a Personal size"
  Code: const pizza = new Pizza("Personal");
  Expected Output: 7

  Test: "It should increase the price by $9 if the user selects a Medium size"
  Code: const pizza = new Pizza("Medium");
  Expected Output: 9

  Test: "It should increase the price by $10.50 if the user selects a Large size"
  Code: const pizza = new Pizza("Large");
  Expected Output: 10.50

  Test: "It should increase the price by $12 if the user selects a Xtra Large size"
  Code: const pizza = new Pizza("Xtra Large");
  Expected Output: 12

  Test: "It should increase the price by $1.50 if the user selects Pepperoni"
  Code: const pizza = new Pizza(["Pepperoni"]);
  Expected Output: 1.50

  Test: "It should increase the price by $1 if the user selects Mushroom"
  Code: const pizza = new Pizza(["Mushroom"]);
  Expected Output: 1.00

  Test: "It should increase the price by $1.25 if the user selects Olives"
  Code: const pizza = new Pizza(["Olives"]);
  Expected Output: 1.25

  Test: "It should increase the price by $.75 if the user selects Onions"
  Code: const pizza = new Pizza(["Onions"]);
  Expected Output: 0.75

  Test: "It should increase the price by $.50 if the user selects Peppers"
  Code: const pizza = new Pizza(["Peppers"]);
  Expected Output: 0.50

  Test: "It should increase the price by $2 if the user selects Anchovies"
  Code: const pizza = new Pizza(["Anchovies"]);
  Expected Output: 2.00

  Describe: Pizza.prototype.validateName()

  Test: "It should return 'invalid name' if the user enters a name smaller than 4 characters"
  Code: const user = new Pizza("Bob");
  const updatedName = user.validateName();
  Expected Output: invalid name
  ```

  
## Known Bugs

* _It lets you add the Choose option to the cart_

# License

_Please contact me at josephwilfong91@gmail.com if you have any questions, ideas, or concerns._

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

_Copyright (c) _2023_ _Joseph Wilfong_
