const str = prompt("Masukkan sebuah string");

const countConsonantLength = () => {
  const count = str.match(/[^aiueo]/gi).length;
  return count;
};

const countConsonant = () => {
  const count = str.match(/[^aiueo 0-9]/gi);
  return count;
};

const resultConsonantLength = countConsonantLength();
const resultConsonant = countConsonant();
alert(
  `Jumlah huruf konsonan adalah ${resultConsonantLength}, yaitu ${resultConsonant}`
);
