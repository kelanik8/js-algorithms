function Palidromes(string) {
  if (string.length > 2) {
    return (
      string
        .split("")
        .reverse()
        .join("") == string
    );
  } else {
    return true;
  }
}
console.log(Palidromes("wo"));
