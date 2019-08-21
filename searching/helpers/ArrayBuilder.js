"use strict";

// Generates an array of specified length in sequential order
const orderedSequentialArray = (length = 0) => [...Array(length).keys()];

// Generates an array of specified length in order and made of random numbers
const orderedRandomArray = (min = 0, max = 100) => {
    if (min > max) return [];

    return unorderedRandomArray(min, max).sort();
};

// Generates an array of specified length in no order and made of random numbers
const unorderedRandomArray = (min = 0, max = 100) => {
    if (min > max) return [];

    return Array.from({ length: min }, () => Math.floor(Math.random() * max));
};

module.exports = {
    orderedSequentialArray,
    orderedRandomArray,
    unorderedRandomArray
};
