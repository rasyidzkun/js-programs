function nextWeek() {
  const tomorrow = new Date();

  tomorrow.setDate(new Date().getDate() + 7);
  return tomorrow;
}

console.log(nextWeek());
