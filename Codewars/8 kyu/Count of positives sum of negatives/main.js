function countPositivesSumNegatives(input) {
  if (input && input.length) {
    let positive = 0;
    let negative = 0;
    input.forEach((num) => (num > 0 ? positive++ : (negative += num)));
    return [positive, negative];
  }
  return [];
}
