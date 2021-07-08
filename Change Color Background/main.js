const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "red",
  "blue",
  "lime",
  "tomato",
  "violet",
  "salmon",
  "yellow",
  "green",
  "lightblue",
  "gray",
  "pink",
  "royalblue",
  "palegreen",
  "steelblue",
];

body.style.backgroundColor = "lightblue";
button.addEventListener("click", change);

function change() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
