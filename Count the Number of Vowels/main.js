const str = prompt("Masukkan sebuah string");

const countVowel = () => {
  const count = str.match(/[aiueo]/gi).length;
  return count;
};

const resultVowel = countVowel();
alert(`Jumlah huruf vokal adalah ${resultVowel}`);
