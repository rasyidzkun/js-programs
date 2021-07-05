const num = parseInt(prompt("Masukkan angka positif"));

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    alert(i);
  }
}

if (isNaN(num)) {
  alert("Tolong masukkan angka");
} else if (num < 0) {
  alert("Tolong masukkan angka positif");
}

const playAgain = confirm("Apakah anda ingin mencoba lagi ? ");
if (playAgain) {
  location.reload();
} else {
  alert("Terimakasih sudah bermain");
}
