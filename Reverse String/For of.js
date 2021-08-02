function reverseString(str) {
  let strReverse = "";
  for (const char of str) {
    strReverse = char + strReverse;
  }
  return strReverse;
}

console.log(reverseString("Hello World"));
