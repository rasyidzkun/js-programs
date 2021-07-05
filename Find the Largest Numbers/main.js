const num1 = parseFloat(prompt("Enter first number: ", 0));
const num2 = parseFloat(prompt("Enter second number: ", 0));
const num3 = parseFloat(prompt("Enter third number: ", 0));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert(`Please enter a number`);
} else {
  const result = Math.max(num1, num2, num3);
  alert(`The largest number is : ${result}`);
}

const play = confirm("Play again ?");
if (play) {
  location.reload();
} else {
  alert("Thanks for playing");
}
