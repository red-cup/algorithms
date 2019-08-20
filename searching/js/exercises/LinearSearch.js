"use strict";

const { orderedSequentialArray } = require("../helpers/ArrayBuilder");

/* 
  Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue.
  Assume that our starting array ranges betwee 0 and 100.
  */

/* 
  EXAMPLE: 
  LinearSearch([1,2,3,4], 2) => 1
*/

const LinearSearch = (array, element) => {
  const index;

  return index;
};

const testArray = orderedSequentialArray(100);


console.log(LinearSearch(testArray, 2)); // => 2
console.log(LinearSearch(testArray, 97)); // => 97
console.log(LinearSearch(testArray, 101)); // => -1