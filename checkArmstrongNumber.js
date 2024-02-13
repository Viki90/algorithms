const prompt = require("prompt-sync")();

// Prompt user for a number
let number = parseFloat(prompt("Enter a number: "));

// Check if input is a valid positive integer
if (!isNaN(number) && Number.isInteger(number) && number > 0) {
  let originalNumber = number;
  let numberOfDigits = originalNumber.toString().length;
  let sum = 0;

  // Calculate the sum of digits each raised to the power of the number of digits
  while (originalNumber > 0) {
    let digit = originalNumber % 10;
    sum += Math.pow(digit, numberOfDigits);
    originalNumber = Math.floor(originalNumber / 10);
  }

  // Check if the number is an Amstrong number
  if (sum === number) {
    console.log(`${number} is an Armstrong number:`);
  } else {
    console.log(`${number} is not an Armstrong number:`);
  }
} else {
  console.log("Please enter a valid positive integer.");
}
