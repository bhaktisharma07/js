const score = 400
console.log(score);

// Creating Number object using constructor
const balance = new Number(100)
console.log(balance);

// Converts number to string, then finds length
console.log(balance.toString().length);

// toFixed() returns number with fixed decimal places
console.log(balance.toFixed(1));

const otherNumber = 23.8966

// toPrecision() returns number with specified total significant digits
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

// Formats number according to locale
// 'en-IN' follows Indian number system (10,00,000)
console.log(hundreds.toLocaleString('en-IN'));



// ********************** MATHS **********************


// Math is a built-in object that provides mathematical functions

// console.log(Math);

// abs() -> Returns absolute (positive) value
// console.log(Math.abs(-4));

// round() -> Rounds to nearest integer
// console.log(Math.round(4.6));

// ceil() -> Always rounds UP to next integer
// console.log(Math.ceil(4.2));

// floor() -> Always rounds DOWN to previous integer
// console.log(Math.floor(4.9));

// min() -> Returns smallest value
// console.log(Math.min(4, 3, 6, 8));

// max() -> Returns largest value
// console.log(Math.max(4, 3, 6, 8));


// random() returns a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Random decimal number between 1 and 10
console.log((Math.random() * 10) + 1);

// Random integer between 1 and 10
// floor() removes decimal part
console.log((Math.floor(Math.random() * 10) + 1));

const min = 10 
const max = 20

// Formula to generate random integer between min and max (both inclusive)
//
// Math.random() -> 0 to <1
// * (max - min + 1) -> Expands range
// floor() -> Removes decimal
// + min -> Shifts range to start from min
//
// Formula:
// Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min);