const prompt = require("prompt-sync")();

// Prompt user for three numbers
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let num3 = parseFloat(prompt("Enter the third number: "));

// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  // Find the largest among the three numbers
  let largestNumber = Math.max(num1, num2, num3);
  console.log(
    `The largest number among ${num1}, ${num2}, and ${num3} is ${largestNumber}`
  );
} else {
  console.log("Please enter a valid numbers for all three inputs");
}
