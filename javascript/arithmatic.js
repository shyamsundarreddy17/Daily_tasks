let num1 = 
let num2 = 2;

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input. Please enter numbers.");
} else {
  let addition = num1 + num2;
  let subtraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
  let modulus = num2 !== 0 ? num1 % num2 : "Error: Division by zero";

  console.log(`Addition: ${addition}`);
  console.log(`Subtraction: ${subtraction}`);
  console.log(`Multiplication: ${multiplication}`);
  console.log(`Division: ${division}`);
  console.log(`Modulus: ${modulus}`);
}
