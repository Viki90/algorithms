const prompt = require("prompt-sync")();

// Prompt user for the range
let minRange = parseFloat(prompt("Enter the minumum value of the range: "));
let maxRange = parseFloat(prompt("Enter the maximun value of the range: "));

// Check if input is a valid number
if (!isNaN(minRange) && !isNaN(maxRange) && minRange < maxRange) {
  // Generate a random number within the specified range
  let randomNumber = Math.random() * (maxRange - minRange) + minRange;
  console.log(
    `A rando number between ${minRange} and ${maxRange} is: ${randomNumber}`
  );
} else {
  console.log(
    "Please enter a valid numbers, ensuring that the minumum value us less than the maximum value"
  );
}
