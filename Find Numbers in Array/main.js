// Find The Largest Number
function largest(x, ...extra) {
  let largest = x;
  for (let i = 0; i < extra.length; i++) {
    if (extra[i] > largest) {
      largest = extra[i];
    }
  }
  return largest;
}

console.log(largest(100, 10, 101, 102, 12, 3, 44, 54));
console.log(largest(1, 2, 3, 4, 5, 5, 6, 6, 7, 1, 2, 3, 7, 8));

//Find The Smallest Number
let smallest = (y, ...extra) => {
  let smallest = y;
  for (let i = 0; i < extra.length; i++) {
    if (extra[i] < smallest) {
      smallest = extra[i];
    }
  }
  return smallest;
};

console.log(smallest(100, 10, 101, 102, 12, 3, 44, 54));
console.log(smallest(1, 0.5, 2, 3, 4, 5, 5, 6, 6, 7, 1, 2, 3, 7, 8));
