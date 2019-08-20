"use strict";

const { orderedSequentialArray } = require("../helpers/ArrayBuilder");

const BinarySearch = (array, element) => {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (array[middle] !== element && start <= end) {
        if (element < array[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }

    return array[middle] === element ? middle : -1;
};

const testArray1 = orderedSequentialArray(20);
const testArray2 = orderedSequentialArray(1000000);

console.log(BinarySearch(testArray1, 3));
console.log(BinarySearch(testArray1, 22));
console.log(BinarySearch(testArray2, 15832));
