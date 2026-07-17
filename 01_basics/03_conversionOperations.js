let score = "27abc" 
/*
score is a string.
Number(score) tries to convert it into a number.
"27abc" is not a pure number.
So JS returns NaN (Not a Number).
*/

// let score = null // output is 0 
// let score = undefined // output is NaN
// let score = "bhakti" // output is NaN
// let score = 27 // will show type as number
// let score = "27" // will show type as tring


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) // Converts score into a Number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// true => 1 
// false => 0
// Boolean() converts a value into true or false.

// let isLoggedIn = 1 
// let isLoggedIn = "" // false
// let isLoggedIn = "bhakti" // true

// let booleanIsLoggedIn = Boolean ( isLoggedIn )
// console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);