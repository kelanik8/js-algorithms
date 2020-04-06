function ArrayChunking(array, size) {
  let chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length == size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

console.log(ArrayChunking([1, 2, 3, 4, 5, 6], 3));
