const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("button");
const color = document.querySelector("span");

function random() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[random()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
