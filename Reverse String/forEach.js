function reverseString(str) {
  let strReverse = "";
  str.split("").forEach((char) => (strReverse = char + strReverse));

  return strReverse;
}
console.log(reverseString("Hello World"));
