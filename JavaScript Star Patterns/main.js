const n = parseInt(prompt("Masukkan jumlah bintang"));

if (n == 0 || n < 0) {
  alert("Tolong masukkan angka positif");
} else if (isNaN(n)) {
  alert("Tolong masukkan angka");
}

// PATTERN 1
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    document.write(`*`);
  }
  document.write(`<br>`);
}

document.write(`<br>`);

//PATERN 2
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    document.write(`*`);
  }
  document.write(`<br>`);
}

document.write(`<br>`);

//PATERN 3
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    document.write(`*`);
  }
  document.write(`<br>`);
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    document.write(`*`);
  }
  document.write(`<br>`);
}

document.write(`<br>`);

//PATERN 4
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n; j++) {
    document.write(`*`);
  }
  document.write(`<br>`);
}

document.write(`<br>`);
