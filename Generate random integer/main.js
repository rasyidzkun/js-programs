function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(between(1, 5));
console.log(between(1, 10));
console.log(between(2, 20));
