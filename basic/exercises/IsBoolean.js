"use strict";

/* 
  Challenge: 
  Determine if a passed in value is of type boolean.

  Example: 

  IsBoolean('true') => false
  IsBoolean(true) => true
  IsBoolean(false) => true
  IsBoolean(0) => false
*/

const IsBoolean = value => {
    return value;
};

console.log(IsBoolean(true)); // => true
console.log(IsBoolean("true")); // => false
console.log(IsBoolean("boolean")); // => false
console.log(IsBoolean(0)); // => false
console.log(IsBoolean(false)); // => true
