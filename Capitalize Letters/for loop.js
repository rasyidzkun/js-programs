function capitalizeLetters(str) {
  const newStr = str.toLowerCase().split(" ");

  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1);
  }
  return newStr.join(" ");
}

console.log(capitalizeLetters("heLlo worlD"));
