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
console.log(countUniqueValues([1, 2, 3, 4, 5, 4]));

const demoArr = [1, 2, 3, 4, 5, 6, 3, 2, 21];

console.log(Math.floor(demoArr.length / 2));
