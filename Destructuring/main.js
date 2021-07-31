const kalkulasi = (a, b) => {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
};

const { tambah, kurang, kali, bagi } = kalkulasi(6, 2);
console.log(tambah);
console.log(kali);
console.log(bagi);
console.log(kurang);
