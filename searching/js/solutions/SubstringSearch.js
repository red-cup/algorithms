"use strict";

const startingString = "lorie loled";

const SubstringSearch = (startingString, substring) => {
  let count = 0;
  for (let i = 0; i < startingString.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (substring[j] !== startingString[i + j]) break;
      if (j === substring.length - 1) count++;
    }
  }
  return count;
};

console.log(SubstringSearch(startingString, "lo"));
