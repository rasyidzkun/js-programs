const str = prompt("Masukkan sebuah string");

const countVowelLength = () => {
  const count = str.match(/[aiueo]/gi).length;
  return count;
};

const countVowel = () => {
  const count = str.match(/[aiueo]/gi);
  return count;
};

const resultVowelLength = countVowelLength();
const resultCountVowel = countVowel();
alert(
  `Jumlah huruf vokal adalah ${resultVowelLength}, yaitu ${resultCountVowel}`
);
