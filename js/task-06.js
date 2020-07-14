"use strict";
let input;
let userInput;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число : ");
  userInput = input;
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else if (userInput === "") {
    input = "";
    alert("Вы ничего не ввели");
    continue;
  } else if (userInput === null) {
    break;
  } else {
    numbers.push(input);
  }
  // console.log(input);
} while (true);
if (numbers.length === 0) {
  /* При загрузке страници пользователь сразу нажал отмену*/
  alert("Подсчет невозможен - Вы ничего не ввели");
} else {
  for (const number of numbers) {
    // console.log(number);
    total += number;
    // console.log(total);
  }
  alert(`Сумма введенных чисел = ${total}`);
}
