const str = prompt("Masukkan sebuah string");

const countVowel = (string) => {
  const count = string.match(/[aiueo]/gi).length;
  return count;
};

const resultVowel = countVowel(str);
alert(`Jumlah huruf vokal adalah ${resultVowel}`);
