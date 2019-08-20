"use strict";

const IsBoolean = value => {
    if (typeof value === "boolean") return true;
    return false;
};

console.log(IsBoolean(true)); // => true
console.log(IsBoolean("true")); // => false
console.log(IsBoolean("boolean")); // => false
console.log(IsBoolean(0)); // => false
console.log(IsBoolean(false)); // => true
