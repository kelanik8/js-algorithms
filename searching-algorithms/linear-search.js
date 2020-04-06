const countries = require("./index");

let newCountryArr = [];
for (element of countries) {
  newCountryArr.push(element.country);
}

const searchLinear = function(arr, val) {
  for (element of arr)
    if (element.toLowerCase() === val.toLowerCase()) return 1;
  return -1;
};

console.log(searchLinear(newCountryArr, "nigeria"));
