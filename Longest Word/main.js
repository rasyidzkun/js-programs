// Return the longest word of a string
// ex. longestWord('Hi there, my name is rasyid') === 'rasyid,'

function longestWord(sentence) {
  //create filtered array
  const wordArr = sentence.match(/[a-z0-9]+/gi);

  //sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  //if multiple words, put into array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
}

console.log(longestWord("Hello there, my name is Rasyid"));
console.log(longestWord("Hello there, my name is Ar"));
