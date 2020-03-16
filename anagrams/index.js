function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;

  const lookup = {};

  for (i of stringA) {
    i = i.toLowerCase();
    lookup[i] ? ++lookup[i] : (lookup[i] = 1);
  }

  for (i of stringB) {
    i = i.toLowerCase();
    if (!lookup[i]) {
      return false;
    } else {
      lookup[i] -= 1;
    }
  }

  return true;
}

console.log(anagrams("Kelani", "elanik"));
