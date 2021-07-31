const filterBy = (type, ...args) => args.filter((f) => typeof f === type);

console.log(filterBy("number", 1, 2, true, "halo", 4, "dunia", 10.2));
console.log(filterBy("string", 1, 2, true, "halo", 4, "dunia", 10.2));
