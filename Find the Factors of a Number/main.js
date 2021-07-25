const num = parseInt(prompt("Masukkan angka positif"));

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    alert(i);
  }
}

const warning = isNaN(num)
  ? alert(`Tolong masukkan angka`)
  : num < 0
  ? alert("Tolong masukkan angka positif")
  : "";

const playAgain = confirm("Apakah anda ingin mencoba lagi ? ");
const again = playAgain
  ? location.reload()
  : alert("Terimakasih sudah bermain");
