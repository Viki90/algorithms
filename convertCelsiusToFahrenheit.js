const prompt = require("prompt-sync")();

// Prompt user for distance in kilometers
let celsius = parseFloat(prompt("Enter the temperature in Celsius: "));

// Check if input is a valid number
if (!isNaN(celsius)) {
  // Convert Celsius to Fahrenheit
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(
    `${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit`
  );
} else {
  console.log("Please enter a valid number for the temperature in Celsius");
}
