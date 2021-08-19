// Return true only if all values are unique, otherwise false

function unique(str) {
  let newStr = new Set();

  for (const letter of str) {
    if (newStr.has(letter)) {
      return false;
    }
    newStr.add(letter);
  }
  return true;
}

console.log(unique("abcd"));
console.log(unique("abcdabcd"));
