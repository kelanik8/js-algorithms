function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(9);

function sumRange(num) {
  if (num == 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(100));

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  arr[0] % 2 !== 0 ? newArr.push(arr[0]) : "";

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
