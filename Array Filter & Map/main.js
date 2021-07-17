const numbers = [0, -1, 1, 0.5, 2, 3, 45, 6, 7, 0.1, 0.11, 0.12];

const newNumber = numbers
  .filter((n) => n > 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 0.1);
console.log(newNumber);
