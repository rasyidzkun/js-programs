// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSum(arr) {
  let even = 0;
  let odd = 0;

  arr.forEach((num) => (num % 2 === 0 ? (even += num) : (odd += num)));
  return [even, odd].join(" , ");
}

console.log(evenOddSum([50, 60, 60, 45, 71]));
