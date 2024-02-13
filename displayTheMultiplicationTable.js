const prompt = require("prompt-sync")();

// Prompt user for a number
let number = parseFloat(
  prompt("Enter a number for the multiplication table: ")
);

// Check if input is a valid integer
if (!isNaN(number) && Number.isInteger(number)) {
  // Specify the range for the multiplication table
  const range = 10;

  console.log(`Multiplication table for ${number} (up to ${range})`);

  // Display the multiplication table
  for (let i = 1; i <= range; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
} else {
  console.log("Please enter valid integer.");
}
