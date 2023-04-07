# Pizza Parlor

#### By _**Joseph Wilfong**_

## Technologies Used

* _HTML_
* _CSS_
* _JAVASCRIPT_
* _TDD_

## Description

_A web application that simulates a real Pizza company where users can order a variety of different toppings and sizes_

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

  Test: "It should get a price for the pizza using a prototype"
  Code: const completePizza = new Pizza (["pepperoni", "green peppers", "artichokes"], "thin and crispy", "medium");
  completePizza.getPrice();
  Expected Output: 15.75
  ```
## Known Bugs

* _Unknown_

# License

_Please contact me at josephwilfong91@gmail.com if you have any questions, ideas, or concerns._

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

_Copyright (c) _2023_ _Joseph Wilfong_
