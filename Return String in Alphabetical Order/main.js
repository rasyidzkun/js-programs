// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

function sortString(str) {
  return str.toLowerCase().split("").sort().join("");
}

console.log(sortString("Webmaster"));
