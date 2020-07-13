"use strict";

// const findLongestWord = function (string) {
//   const inputString = string.split(" ");
//   let maxLettersWord = 0;
//   for (let i = 0; i < inputString.length; i += 1) {
//     if (inputString[i].length > maxLettersWord) {
//       maxLettersWord = i;
//     }
//   }
//   //   return maxLettersWord;
//   return inputString[maxLettersWord];
// };
const findLongestWord = function (string) {
  const inputString = string.split(" ");
  let inputStringLength = 0;
  let maxLettersWord = 0;
  for (let i = 0; i < inputString.length; i += 1) {
    if (inputString[i].length > inputStringLength) {
      inputStringLength = inputString[i].length;
      maxLettersWord = i;
    }
  }
  return inputString[maxLettersWord];
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
