const prompt = require("prompt-sync")();

// Prompt user for a non-negative integer
let number = parseFloat(prompt("Enter a non-negative integer: "));

// Check if input is a valid non-negative integer
if (!isNaN(number) && Number.isInteger(number) && number >= 0) {
  // Calculate the factorial
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(`The factorial of ${number} is: ${factorial}`);
} else {
  console.log("Please enter valid non-negative integer.");
}
