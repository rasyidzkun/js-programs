function binary() {
  let input = Number(prompt(" Masukkan angka decimal ", 0));

  let biner = input.toString(2);
  alert(`decimal = ${input} biner = ${biner}`);
}

function octal() {
  let input = Number(prompt(" Masukkan angka decimal ", 0));

  let octal = input.toString(8);
  alert(`decimal = ${input} oktal = ${octal}`);
}

function hexadecimal() {
  let input = Number(prompt(" Masukkan angka decimal ", 0));

  let hex = input.toString(16).toUpperCase();
  alert(`decimal = ${input} hexadecimal = ${hex}`);
}
