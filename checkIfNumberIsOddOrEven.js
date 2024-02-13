const prompt = require("prompt-sync")();

// Prompt user for a number
let number = parseFloat(prompt("Enter a number: "));

// Check if input is a valid number
if (!isNaN(number) && Number.isInteger(number)) {
  // Check if the number is odd or even
  if (number % 2 === 0) {
    console.log(`${number} is an even number`);
  } else {
    console.log(`${number} is an odd number`);
  }
} else {
  console.log("Please enter a valid number");
}
