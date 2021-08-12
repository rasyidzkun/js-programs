function average(arr) {
  const n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum / n;
}

console.log(average([1, 2, 3, 4, 5]));
