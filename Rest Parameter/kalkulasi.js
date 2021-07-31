const tambah = (...args) => args.reduce((acc, cur) => acc + cur, 0);
console.log(tambah(1, 2, 3, 4, 5, 6));

const kurang = (...args) => args.reduce((acc, cur) => acc - cur);
console.log(kurang(10, 1, 1, 1, 1, 1));

const kali = (...args) => args.reduce((acc, cur) => acc * cur);
console.log(kali(1, 2, 4, 6, 8));

const bagi = (...args) => args.reduce((acc, cur) => acc / cur);
console.log(bagi(100, 4, 5));
