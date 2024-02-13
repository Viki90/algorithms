const prompt = require("prompt-sync")();

// Prompt user for number
let number = parseFloat(prompt("Enter a number: "));

// Check if inputs is valid integer greater than 1
if (!isNaN(number) && Number.isInteger(number) && number > 1) {
  let isPrime = true;

  // Check for factors from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  // Display the result
  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is not a prime number`);
  }
} else {
  console.log("Please enter a valid integer greater than 1.");
}
