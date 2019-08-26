// "use strict";

// const { orderedSequentialArray } = require("../helpers/ArrayBuilder");

// const JumpSearch = (array, item) => {
//   const arraySize = array.length;
//   if (!arraySize) return -1;

//   const step = Math.floor(Math.sqrt(array.length));

//   while (array[min(step, array.length) - 1]) {}

//   let blockStart = 0;
//   let blockEnd = jumpSize;
//   while (
//     comparator.greaterThan(
//       seekElement,
//       sortedArray[Math.min(blockEnd, arraySize) - 1]
//     )
//   ) {
//     // Jump to the next block.
//     blockStart = blockEnd;
//     blockEnd += jumpSize;

//     // If our next block is out of array then we couldn't found the element.
//     if (blockStart > arraySize) {
//       return -1;
//     }
//   }

//   // Do linear search for seekElement in subarray starting from blockStart.
//   let currentIndex = blockStart;
//   while (currentIndex < Math.min(blockEnd, arraySize)) {
//     if (comparator.equal(sortedArray[currentIndex], seekElement)) {
//       return currentIndex;
//     }

//     currentIndex += 1;
//   }

//   return -1;
// };

// const testArray = orderedSequentialArray(100);

// console.log(JumpSearch(testArray, 2)); // => 2
// console.log(JumpSearch(testArray, 97)); // => 97
// console.log(JumpSearch(testArray, 101)); // => -1

// export default function jumpSearch(
//   sortedArray,
//   seekElement,
//   comparatorCallback
// ) {
//   const arraySize = sortedArray.length;

//   if (!arraySize) {
//     // We can't find anything in empty array.
//     return -1;
//   }

//   // Calculate optimal jump size.
//   // Total number of comparisons in the worst case will be ((arraySize/jumpSize) + jumpSize - 1).
//   // The value of the function ((arraySize/jumpSize) + jumpSize - 1) will be minimum
//   // when jumpSize = √array.length.
//   const jumpSize = Math.floor(Math.sqrt(arraySize));

//   // Find the block where the seekElement belong to.
//   let blockStart = 0;
//   let blockEnd = jumpSize;
//   while (
//     comparator.greaterThan(
//       seekElement,
//       sortedArray[Math.min(blockEnd, arraySize) - 1]
//     )
//   ) {
//     // Jump to the next block.
//     blockStart = blockEnd;
//     blockEnd += jumpSize;

//     // If our next block is out of array then we couldn't found the element.
//     if (blockStart > arraySize) {
//       return -1;
//     }
//   }

//   // Do linear search for seekElement in subarray starting from blockStart.
//   let currentIndex = blockStart;
//   while (currentIndex < Math.min(blockEnd, arraySize)) {
//     if (comparator.equal(sortedArray[currentIndex], seekElement)) {
//       return currentIndex;
//     }

//     currentIndex += 1;
//   }

//   return -1;
// }
