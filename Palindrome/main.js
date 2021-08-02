function palindrome(str) {
  const strReverse = str.split("").reverse().join("");

  return strReverse === str;
}

console.log(palindrome("kasur rusak"));
console.log(palindrome("racecar"));
console.log(palindrome("hello"));
