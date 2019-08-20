"use strict";

// Generates an array of specified length in sequential order
const orderedSequentialArray = (length = 0) => [...Array(length).keys()];

// Generates an array of specified length in order and made of random numbers
const orderedRandomArray = (length = 0, max = 100) =>
    unorderedRandomArray(length, max).sort();

// Generates an array of specified length in no order and made of random numbers
const unorderedRandomArray = (length = 0, max = 100) =>
    Array.from({ length: length }, () => Math.floor(Math.random() * max));

module.exports = {
    orderedSequentialArray,
    orderedRandomArray,
    unorderedRandomArray
};
