const bubbleSort = function(array) {
  let noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
};

console.log(bubbleSort([1, 120, 90, 2, 31, 1, 19, 12, 11, 10, 9, 3, 34]));
