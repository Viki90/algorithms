const prompt = require("prompt-sync")();

// Prompt user for interval
let startNumber = parseInt(
  prompt("Enter the starting number of the interval: ")
);
let endNumber = parseInt(prompt("Enter the ending number of the interval: "));

// Check if inputs are valid integers and the startNumber is less than the endNumber
if (
  !isNaN(startNumber) &&
  !isNaN(endNumber) &&
  Number.isInteger(startNumber) &&
  Number.isInteger(endNumber) &&
  startNumber < endNumber &&
  startNumber > 1
) {
  console.log(`Prime numbers in the interval [${startNumber}, ${endNumber}]:`);

  // Check for prime numbers in the interval
  for (let i = startNumber; i <= endNumber; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
} else {
  console.log(
    "Please enter a valid integers, ensuring that the starting numbers is less than the ending number and greater than 1."
  );
}
