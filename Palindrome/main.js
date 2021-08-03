// Return true if palindrome and false if not
// ex. palindrome('racecar') === 'true', isPalindrome('hello') == false

function palindrome(str) {
  const strReverse = str.split("").reverse().join("");

  return strReverse === str;
}

console.log(palindrome("kasur rusak")); //true
console.log(palindrome("racecar")); //true
console.log(palindrome("hello")); //false
