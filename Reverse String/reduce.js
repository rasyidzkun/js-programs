function reverseString(str) {
  return str.split("").reduce((strReverse, char) => char + strReverse);
}

console.log(reverseString("Hello World"));
