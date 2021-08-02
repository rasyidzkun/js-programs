function reverseInt(int) {
  const strReverse = int.toString().split("").reverse().join("");

  return parseFloat(strReverse) * Math.sign(int);
}

console.log(reverseInt(123));
console.log(reverseInt(-123));

console.log(reverseInt(246.88));
console.log(reverseInt(-246.88));
