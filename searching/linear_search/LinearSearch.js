"use strict";

const { orderedSequentialArray } = require("../helpers/ArrayBuilder");

const LinearSearchWithIterationCount = (array, element) => {
  let iterationCount = 0;
  for (let i = 0; i < array.length; i++) {
    iterationCount += 1;
    if (array[i] === element) {
      console.log("Number of Iterations to find Element:", iterationCount);
      return i;
    }
  }

  console.log("Number of Iterations to find Element:", iterationCount);
  return -1;
};

const testArray = orderedSequentialArray(100);

console.log(LinearSearchWithIterationCount(testArray, 2)); // => 2
console.log(LinearSearchWithIterationCount(testArray, 97)); // => 97
console.log(LinearSearchWithIterationCount(testArray, 101)); // => -1
