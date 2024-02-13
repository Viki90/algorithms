const prompt = require("prompt-sync")();

let base = parseFloat(prompt("Enter the base of the triangle: "));
let height = parseFloat(prompt("Enter the height of the triangle: "));

if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
  let area = 0.5 * base * height;
  console.log(
    `The area of the triangle with base ${base} and height ${height} is: ${area}`
  );
} else {
  console.log("Please enter valid positive numbers for base and height");
}
