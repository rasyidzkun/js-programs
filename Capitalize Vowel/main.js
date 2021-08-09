function capitalizeVowel(str) {
  return str.toLowerCase().replace(/[aeiuo]/gi, (vowel) => vowel.toUpperCase());
}

console.log(capitalizeVowel("Hello There"));
