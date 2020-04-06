// const countries = require("./index");

// let orderedNo = [];
// let i = 0;
// for (element of countries) {
//   orderedNo.push(++i);
// }

const binarySearch = function(arr, val) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let midIndex = Math.floor(leftIndex + rightIndex / 2);

  while (arr[midIndex] !== val && leftIndex <= rightIndex) {
    if (arr[midIndex] > val) rightIndex = midIndex - 1;
    else leftIndex = midIndex + 1;

    midIndex = Math.floor(leftIndex + rightIndex / 2);
  }
  return arr[midIndex] == val ? midIndex : -1;
};

console.log(binarySearch([1, 3, 4, 5, 6, 7, 8, 50], 50));
const swap = function(array, index1, index2) {
  return ([array[index2], array[index1]] = [array[index1], array[index2]]);
};
