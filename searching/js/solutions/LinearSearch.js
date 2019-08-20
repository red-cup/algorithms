"use strict";

const { orderedSequentialArray } = require("../helpers/ArrayBuilder");

const LinearSearch = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
    }
    return -1;
};

const testArray = orderedSequentialArray(100);

console.log(LinearSearch(testArray, 2)); // => 2
console.log(LinearSearch(testArray, 97)); // => 97
console.log(LinearSearch(testArray, 101)); // => -1
