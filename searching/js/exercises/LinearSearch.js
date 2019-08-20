"use strict";

const { orderedSequentialArray, orderedRandomArray } = require("../helpers/ArrayBuilder");

/* 
  Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue.
  Assume that our starting array ranges between 0 and 100.
  */

/* 
  EXAMPLE: 
  LinearSearch([1,2,3,4], 2) => 1
  LinearSearch([1,3,7,12], 7) => 2
*/

const LinearSearch = (array, element) => {
  const index;

  return index;
};

const testArray = orderedSequentialArray(100);
const testArray2 = orderedRandomArray(100, 100);

console.log(LinearSearch(testArray, 2)); // => 2
console.log(LinearSearch(testArray, 97)); // => 97
console.log(LinearSearch(testArray, 101)); // => -1

console.log(LinearSearch(testArray2, 18)); // => ?
console.log(LinearSearch(testArray2, 109)); // => -1
