const myArray = [
  "cat",
  "neko",
  "kucing",
  "coconut",
  "orange",
  "apple",
  "laptop",
  "jacket",
  true,
  false,
  1,
  66,
  5,
  1945,
  "candy",
  "lolipop",
];

const randomArray = () => {
  const randomIndex = Math.floor(Math.random() * myArray.length);
  const item = myArray[randomIndex];

  return item;
};

const result = randomArray();
console.log(result);
