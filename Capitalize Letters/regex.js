function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();
  });
}

console.log(capitalizeLetters("hello world"));
