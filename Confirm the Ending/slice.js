// Check if a string (first argument, str) ends with the given target string (second argument, target).

function checkEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(checkEnding("kucingkun", "n"));
