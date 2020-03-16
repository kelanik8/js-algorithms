const countUniqueValues = arr => {
  const arrMap = {};

  for (i of arr) {
    i = +i;
    arrMap[i] ? arrMap[i]++ : (arrMap[i] = 1);
  }
  let count = 0;
  for (i in arrMap) {
    count++;
  }
  return count;
};

const countUniqueValuesWithMultiplePointers = arr => {
  const left = 0;
  const right = arr.length - 1;

  const uniqueCount = 0;
  while (left < right) {
    if (arr[left] == arr[right]) {
      uniqueCount++;
    }
  }
};

console.log(countUniqueValuesWithMultiplePointers([1, 2, 3, 4, 5, 4]));
