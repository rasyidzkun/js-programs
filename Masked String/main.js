// changes all the letters but the last four characters into "#"

function maskedStr(str) {
  return str
    .split("")
    .map((letter, idx) => (idx < str.length - 4 ? "#" : letter))
    .join("");
}

console.log(maskedStr("546789021281317")); // ###########1317
console.log(maskedStr("1234")); // 1234
console.log(maskedStr("54678")); // #4678
