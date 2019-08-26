"use strict";

const { orderedSequentialArray } = require("../helpers/ArrayBuilder");

const BinarySearch = (array, element) => {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);
  let iterationCount = 0;
  while (array[middle] !== element && left <= right) {
    iterationCount += 1;
    if (element < array[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  console.log("Number of Iterations to find Element:", iterationCount);
  return array[middle] === element ? middle : -1;
};

const testArray = orderedSequentialArray(100);

console.log(BinarySearch(testArray, 2)); // => 2
console.log(BinarySearch(testArray, 97)); // => 97
console.log(BinarySearch(testArray, 101)); // => -1
