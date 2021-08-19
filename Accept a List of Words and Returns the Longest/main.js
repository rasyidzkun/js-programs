// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output

// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function longest(arr) {
  return arr.reduce((long, short) => {
    return long.length > short.length ? long : short;
  });
}

console.log(longest(["Australia", "Germany", "United States of America"]));
// United States of America
