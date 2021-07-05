const num1 = parseFloat(prompt("Masukkan angka pertama: ", 0));
const num2 = parseFloat(prompt("Masukkan angka kedua: ", 0));
const num3 = parseFloat(prompt("Masukkan angka ketiga: ", 0));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert(`Tolong masukkan angka`);
} else {
  const result = Math.max(num1, num2, num3);
  alert(`Angka terbesar adalah : ${result}`);
}

const play = confirm("Ingin bermain sekali lagi ?");
if (play) {
  location.reload();
} else {
  alert("Terimakasih telah bermain");
}
