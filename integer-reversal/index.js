function integerReversal(num) {
  return +num
    .toString()
    .split("")
    .reverse()
    .join("");
}

console.log(integerReversal(1230));
