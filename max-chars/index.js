function maxChars(chars) {
  let CharMap = {};

  for (let i of chars) {
    i = i.toLowerCase();
    if (CharMap[i] && CharMap[i] == " ") {
      CharMap[i]++;
    } else {
      CharMap[i] = 1;
    }
  }

  let max = 0;
  for (let x in CharMap) {
    if (max < CharMap[x]) max = CharMap[x];
  }
  return CharMap;
}

console.log(maxChars("Tolulope Kelani k"));
