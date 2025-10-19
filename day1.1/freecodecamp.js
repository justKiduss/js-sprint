// freeCodeCamp: Variable Declaration
let varExample = 5;

// freeCodeCamp: Assignment Operators
let assignment = 10;
assignment += 5; // 15

// freeCodeCamp: Increment and Decrement
let count = 5;
count++; // increment by 1 → 6
count--; // decrement by 1 → 5

// freeCodeCamp: Arithmetic Operations
let sum = 10 + 5;       // 15
let difference = 10 - 5; // 5
let product = 10 * 5;    // 50
let quotient = 10 / 5;   // 2
let remainder = 10 % 3;  // 1

// freeCodeCamp: String Concatenation
let firstName = "Kidus";
let lastName = "Coder";
let fullName = firstName + " " + lastName; // "Kidus Coder"

// freeCodeCamp: Math Operations with Variables
let x = 8;
let y = 3;
let total = (x + y) * 2; // 22

// freeCodeCamp: Equality Operators
let a = 5;
let b = "5";

console.log(a == b);  // true  (loose equality)
console.log(a === b); // false (strict equality)

// freeCodeCamp: Logical Operators
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed entry");
}

if (age < 18 || !hasID) {
  console.log("Access denied");
}
