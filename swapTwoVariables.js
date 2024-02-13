const prompt = require("prompt-sync")();

let variable1 = prompt("Enter the first variable: ");
let variable2 = prompt("Enter the second variable: ");

console.log(
  `Before swapping: Variable1 = ${variable1}, Variable2 = ${variable2}`
);

// Swapping the variables
let temp = variable1;
variable1 = variable2;
variable2 = temp;

console.log(
  `After swapping: Variable1 = ${variable1}, Variable2 = ${variable2}`
);
