function getPositive(arr) {
  return arr.filter((num) => num >= 0);
}

console.log(getPositive([2, -2, -3, 4, 5, -5, 6, -10]));
