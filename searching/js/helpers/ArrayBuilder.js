"use strict";

const orderedSequentialArray = (length = 0) => [...Array(length).keys()];

const orderedRandomArray = (length = 0, max = 100) =>
    unorderedRandomArray(length, max).sort();

const unorderedRandomArray = (length = 0, max = 100) =>
    Array.from({ length: length }, () => Math.floor(Math.random() * max));

module.exports = {
    orderedSequentialArray,
    orderedRandomArray,
    unorderedRandomArray
};
