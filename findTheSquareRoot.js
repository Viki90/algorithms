const prompt = require("prompt-sync")();

let inputNumber = parseFloat(prompt("Enter a non-negative number: "));
if (!isNaN(inputNumber) && inputNumber >= 0) {
  let squareRoot = Math.sqrt(inputNumber);
  console.log(`The square root of ${inputNumber} is ${squareRoot}`);
} else {
  console.log("Please enter a valid non-negative number");
}
