function alternatingCase(str) {
  return str
    .split("")
    .map((char) => {
      if (char.toLowerCase() === char) {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    })
    .join("");
}

console.log(alternatingCase("HelLo worLD")); //hELlO WORld
