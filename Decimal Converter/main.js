function binary() {
  input = Number(prompt(" Masukkan angka decimal ", 0));

  let biner = input.toString(2);
  alert(`decimal = ${input} biner = ${biner}`);
}

function octal() {
  input = Number(prompt(" Masukkan angka decimal ", 0));

  let octal = input.toString(8);
  alert(`decimal = ${input} oktal = ${octal}`);
}

function hexadecimal() {
  input = Number(prompt(" Masukkan angka decimal ", 0));

  let hex = input.toString(16);
  alert(`decimal = ${input} hexadecimal = ${hex}`);
}
