const prompt = require("prompt-sync")();

// Prompt user for coefficients
let a = parseFloat(prompt("Enter the coefficient a: "));
let b = parseFloat(prompt("Enter the coefficient b: "));
let c = parseFloat(prompt("Enter the coefficient c: "));

// Calculate the discriminant
let discriminant = b ** 2 - 4 * a * c;

// Check if roots are real
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(
      `The roots of the quadratic equation are ${root1} and ${root2}`
    );
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    console.log(`The quadratic equation has a repeated root: ${root}`);
  } else {
    console.log("The quadratic equation has complex roots");
  }
} else {
  console.log("Please enter valid numbers for coefficients");
}
