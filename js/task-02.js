"use strict";
const calculateEngravingPrice = function (message, pricePerWord) {
  const wordsForEngraving = message.split(" ");
  const finalCoast = wordsForEngraving.length * pricePerWord;
  return finalCoast;
};
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);
