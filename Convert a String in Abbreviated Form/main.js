function abbrev(str) {
  const splitName = str.trim().split(" ");
  if (splitName.length > 1) {
    return `${splitName[0]} ${splitName[1].charAt(0)}.`;
  }

  return splitName.join();
}

console.log(abbrev("Kucing Menangis"));
