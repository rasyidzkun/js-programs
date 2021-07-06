let number = parseInt(prompt("Tebak angka dari 1 - 10", 0));

const guessNumber = () => {
  const random = Math.floor(Math.random() * 10 + 1);

  while (number !== random) {
    number = parseInt(prompt("Tebak angka dari 1 - 10", 0));
  }

  if (number == random) {
    alert(`Selamat, anda menebak angka yang benar`);
    alert(`Angka yang benar adalah ${number}`);
  }
};

guessNumber();
