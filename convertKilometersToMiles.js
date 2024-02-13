const prompt = require("prompt-sync")();

// Prompt user for distance in kilometers
let kilometers = parseFloat(prompt("Enter the cdistance in kilometers: "));

// Conversion factor
let kilometersToMilesConversionFactors = 0.621371;

// Check if input is a valid number
if (!isNaN(kilometers)) {
  // Convert kilometers to miles
  let miles = kilometers * kilometersToMilesConversionFactors;
  console.log(`${kilometers} kilometers is approximately ${miles} miles`);
} else {
  console.log("Please enter a valid number for a distance in kilometers");
}
