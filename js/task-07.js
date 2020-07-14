"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let message;
const isLoginValid = function (login) {
  const valid = login.length >= 4 && login.length <= 16;
  return valid;
  // console.log(valid);
};
const isLoginUnique = function (allLogins, login) {
  const isUnique = !allLogins.includes(login);
  return isUnique;
};
const addLogin = function (allLogins, login) {
  message = "Ошибка! Логин должен быть от 4 до 16 символов";
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      message = "Логин добавлен";
    } else {
      message = "Такой логин существует";
    }
    // }else {
    //     message = 'Ошибка! Логин должен быть от 4 до 16 символов'
  }
  return message;
};
console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
