// Write a program that prints all the numbers from 1 to 100. For multiples 0f 3, instead of the number, print "Fizz, for multiples  of 5 print "Buzz", for numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    const check =
      i % 3 === 0 && i % 5 === 0
        ? console.log("FizzBuzz")
        : i % 3 === 0
        ? console.log("Fizz")
        : i % 5 === 0
        ? console.log("Buzz")
        : console.log(i);
  }
}

fizzBuzz();
