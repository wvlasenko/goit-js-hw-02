"use strict";
"use strict";
let message;

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    let indexIncrement = i + 1;
    message = `${indexIncrement} - ${array[i]}`;
    console.log(message);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
