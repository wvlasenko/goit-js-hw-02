"use strict";
let resultMessage = "falce";
const firstNameToFind = "spam";
const secondNameToFind = "sale";
const checkForSpam = function (message) {
  let normalizeMassage = message.toLowerCase();
  const inputWords = normalizeMassage.split(" ");
  // console.log(inputWords);
  for (const inputWord of inputWords) {
    if (firstNameToFind === inputWord || secondNameToFind === inputWord) {
      resultMessage = "true";
      break;
    }
  }
  return resultMessage;
};
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
