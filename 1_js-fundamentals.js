//var _age = 30;

let age = 25;
let temperature = -19.6;

age = 30;

console.log(age);

let name = "Simon";
let message = "Hello Group 58!";

let myVar = 10;

console.log("####### TYPE OF VARAIBLE IS: ", typeof myVar);

myVar = "10";
console.log("####### TYPE OF VARAIBLE IS: ", typeof myVar);

let isRaining = true;
let hasCoffee = false;

let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];

let person = {
  name: "Simon",
  age: 29,
  isStudent: true,
};

let nullVar = null; // null
let description; // undefined

console.log(nullVar);
console.log(description);

const PI = 3.14;
const API_URL = "localhost:8080/api/v1/tasks";

//PI = 30;

console.log(PI);

for (let i = 1; i <= numbers.length; i++) {
  if (i % 2 == 0) {
    console.log("Even!");
  } else {
    console.log("Odd!");
  }
}
console.log("----------------");

for (let i of numbers) {
  const msg = i % 2 == 0 ? "Even!" : "Odd!";

  console.log(msg);
}

numbers.forEach(() => {});

console.log("----------------");

numbers.forEach((i) =>
  i % 2 == 0 ? console.log("Even!") : console.log("Odd!"),
);

// switch Case Example
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Tuesday":
    console.log("It's the second day of the week.");
    break;
  case "Wednesday":
    console.log("It's the middle of the week.");
    break;
  case "Thursday":
    console.log("It's almost the weekend.");
    break;
  case "Friday":
    console.log("It's the end of the workweek.");
    break;
  default:
    console.log("It's the weekend!");
}

//  comparison operators === vs ==
/*
The == (Loose Equality) operator is used for loose equality comparison, which means it checks for value equality
The === (Strict Equality) operator is used for strict equality comparison, which means it checks for both value and type equality
*/

let n1 = 10;
let n2 = "10";

let isEqual = n1 == n2; // True

let isEqualStrict = n1 === n2; // False

console.log("Are they Equal: ", isEqual);

console.log("Are they Equal (Strict): ", isEqualStrict);

/*
function functionName(parameters){
    // Function body
    // Code to be excuted

    // Maybe some values to return?
}
*/

//greet("Simon");

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Simon");

function isEvenNumber(number) {
  if (number % 2 === 0) {
    console.log(number, "Even");
  } else {
    console.log(number, "Odd");
  }
}

isEvenNumber(7); // Output: Odd
isEvenNumber(14); // Output: Even

function addition(num1, num2) {
  return num1 + num2;
}

//Function Expression
/*
const functionName = () => {

    // Function Body
    // Code to be executed

}
*/

const _addition = (num1, numb2) => num1 + num2;

const _evenOddNumber = (number) => {
  if (i % 2 == 0) {
    ("Even!");
  } else {
    ("Odd!");
  }
};

const __evenOddNumber = (number) => (number % 2 == 0 ? "Even" : "Odd");

const ___evenOddNumber = (number) => (number % 2 == 0 ? "Even" : "Odd");

// Adding default value
const _greet = (name = "JavaScript") => "Hello, " + name + "!";

//let greetMSG = _greet("Simon");
let greetMSG = _greet();

console.log(greetMSG);




function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(
    sum(2,3,4,5,6,2,4,2)
)


const u = { name: "Sarah", product: "Laptop", price: 999 };

const msg = "Hi " + u.name + ", `\nthank you for purchasing the " + u.product + " for $" + u.price + ".\nWe hope you enjoy your new device!";
console.log(msg);


const msg2 = 
`Hi ${u.name},
thank you for purchasing the ${u.product} for ${u.price}.
We hope you enjoy your new device!`;

console.log(msg2);




function calculate (num1, num2, operation){
    return operation(num1, num2)
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide (x,y) {

    if(y === 0){
        throw new Error("Can not divide by Zero!")
    }

    return x / y;
}



let result1 = calculate(5, 6, add);

console.log(result1);

let result2 = calculate(8.3, 4.4, subtract);
console.log("Subtraction:", result2); // Output: Subtraction: 4

let result4 = calculate(5,3, (a, b) => a * b)
//let result3 = calculate(3, 6, multiply);
console.log(result4);


console.log(calculate(5,0, divide));


/*
The try...catch statement is used in JavaScript for error handling. 
It allows you to "try" running code that may throw an error and then "catch" and handle the error gracefully, 
instead of letting it crash the entire program.
 Additionally, you can use the finally block to execute code that should run regardless of whether an error occurred or not.

 try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always run, no matter what
}

*/

try {
  let result4 = calculate(10, 2, divide);
  console.log("Division:", result4); // Output: Division: 5

  let result5 = calculate(5, 0, divide);
  console.log("Division:", result5); // Output: Division: Cannot divide by zero!
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("finally block executed!");
}


console.log("JSON Parsing Example");
try {
  let jsonData = '{"name": "John", "age": 30}';
  let userObject = JSON.parse(jsonData); // Correct JSON, no error
  console.log(userObject); // Output: { name: 'John', age: 30 }
  console.log(userObject.name); // Output: John
} catch (error) {
  console.error("Parsing error:", error.message);
} finally {
  console.log("Parsing attempt completed.");
}


// Where to see all JS classes?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// JavaScript Dates:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


let text = "Hello, World!";

console.log(text.length); // Length of the string
console.log(text.toUpperCase()); // Convert to uppercase
console.log(text.toLowerCase()); // Convert to lowercase
console.log(text.indexOf("World")); // Index of a substring
console.log(text.slice(0, 5)); // Extract a substring
console.log(text.replace("World", "Universe")); // Replace substring

let currentDate = new Date();
console.log("currentDate>>>>",currentDate);

console.log("currentDate>>>>",currentDate.toLocaleString("sv-SE"));
//console.log("currentDate>>>>",currentDate.toLocaleString("en-US"));


console.log(currentDate.getFullYear()); // Get the year
console.log(currentDate.getMonth()); // Get the month (0-11)
console.log(currentDate.getDate()); // Get the day of the month
console.log(currentDate.getHours()); // Get the hours
console.log(currentDate.getMinutes()); // Get the minutes
console.log(currentDate.getSeconds()); // Get the seconds


let dateString = "2023-11-08T12:30:00";
// Convert the string to a Date object
let date = new Date(dateString);

let formattedDateSE = date.toLocaleDateString("sv-SE");
console.log(formattedDateSE);











