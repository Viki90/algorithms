const prompt = require("prompt-sync")();

// Prompt user for the interval
let startNumber = parseInt(
  prompt("Enter the starting number of the interval: ")
);
let endNumber = parseInt(prompt("Enter the ending number of the interval: "));

// Check if inputs are valid positive integers and the startNumber is less than the endNumber
if (
  !isNaN(startNumber) &&
  !isNaN(endNumber) &&
  Number.isInteger(startNumber) &&
  Number.isInteger(endNumber) &&
  startNumber > 0 &&
  startNumber < endNumber
) {
  console.log(
    `Amstrong numbers in the interval [${startNumber}, ${endNumber}]:`
  );

  // Check for Amrstong numbers in the interval
  for (let i = startNumber; i <= endNumber; i++) {
    let originalNumber = i;
    let numberOfDigits = originalNumber.toString().length;
    let sum = 0;

    while (originalNumber > 0) {
      let digit = originalNumber % 10;
      sum += Math.pow(digit, numberOfDigits);
      originalNumber = Math.floor(originalNumber / 10);
    }

    if (sum === i) {
      console.log(i);
    }
  }
} else {
  console.log(
    "Please enter a valid positive integers, ensuring that the starting number is less than the ending number and both are greather than 0."
  );
}
