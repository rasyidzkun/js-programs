const myArr = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 5, 6, 7],
  [8, 8, 9, 10],
];

for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr[i].length; j++) {
    console.log(myArr[i][j]);
  }
  console.log("=====");
}

// USING FOREACH

myArr.forEach((row) => {
  row.forEach((col) => {
    console.log(col);
  });
  console.log("~~~~~");
});
