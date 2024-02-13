const prompt = require("prompt-sync")();

// Prompt user for a number
let number = parseFloat(prompt("Enter a number: "));

// Check if input is a valid number
if (!isNaN(number)) {
  // Check if the number is positive, negative, or zero
  if (number > 0) {
    console.log(`${number} is a positive number`);
  } else if (number < 0) {
    console.log(`${number} is a negative number`);
  } else {
    console.log("This number is zero.");
  }
} else {
  console.log("Please enter a valid number");
}
