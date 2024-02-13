const prompt = require("prompt-sync")();

// Prompt user for the number of terms in the Fibonacci sequence
let numTerms = parseFloat(
  prompt("Enter a number of terms in the Fibonacci sequence: ")
);

// Check if input is a valid integer
if (!isNaN(numTerms) && Number.isInteger(numTerms) && numTerms > 0) {
  console.log(`Fibonacci sequence of ${numTerms} terms:`);

  let fibArray = [0, 1];

  // Generate the Fibonacci sequence
  for (let i = 2; i <= numTerms; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  console.log(fibArray.join(","));
} else {
  console.log("Please enter valid positive integer for the number of terms.");
}
