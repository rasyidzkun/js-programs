function getPositive(arr) {
  const newArr = [];

  for (const a of arr) {
    a >= 0 ? newArr.push(a) : "";
  }

  return newArr;
}

console.log(getPositive([2, -2, -3, 4, 5, -5, 6, -10]));
