const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

if (!isNaN(num1) && !isNaN(num2)) {
  let sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
} else {
  console.log("Please enter valid numbers");
}
