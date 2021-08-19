const kalkulasi = (a, b) => {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
};

const { tambah, kurang, kali, bagi } = kalkulasi(6, 2);
console.log(tambah); //8
console.log(kali); //12
console.log(bagi); //3
console.log(kurang); //4
