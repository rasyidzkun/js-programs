// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

//The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

function mutations(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => arr[0].toLowerCase().indexOf(letter) != -1);
}

console.log(mutations(["hello", "hell"]));
console.log(mutations(["hello", "hey"]));
