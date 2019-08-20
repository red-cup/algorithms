"use strict";

const {
  orderedSequentialArray,
  orderedRandomArray
} = require("../helpers/ArrayBuilder");

/* Change the code below this line */

const LinearSearch = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return -1;
};

/* Change the code above this line */

const testArray = orderedSequentialArray(100);
const testArray2 = orderedRandomArray(100, 100);

console.log(LinearSearch(testArray, 2)); // => 2
console.log(LinearSearch(testArray, 97)); // => 97
console.log(LinearSearch(testArray, 101)); // => -1

console.log(LinearSearch(testArray2, 18)); // => ?
console.log(LinearSearch(testArray2, 109)); // => -1
