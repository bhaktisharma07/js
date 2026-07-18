//************** CONVERSIONS **************//

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
// let score = "27" // String value


// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) // Converts score to a number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Number(true) = 1
// Number(false) = 0

// Boolean() converts a value into true or false.

let isLoggedIn = 1 
// let isLoggedIn = "" // false
// let isLoggedIn = "bhakti" // true

// let booleanIsLoggedIn = Boolean ( isLoggedIn )
// console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console .log(typeof stringNumber);



//************** OPERATIONS **************//

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);  // Basic arithmetic operators

let str1 = "hello"
let str2 = " bhakti"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // output = 12
// console.log(1 + "2");  // output = 12
// console.log("1" + 2 + 2); // output = 122

// console.log(1 + 2 + "2"); 

// Output = "32"
// 1 + 2 is calculated first = 3
// Then 3 + "2" becomes "32"

//console.log( (3 + 4) * 5 % 3);

// If a string comes first, the rest are joined as strings
// If the string comes last, numbers are added first, then converted to a string

// console.log(+true); // output = 1

// console.log(+""); // output = 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // output = 101

/*
Prefix (++x): Value is increased first, then used
Postfix (x++): Current value is used first, then increased

Read more: MDN Increment (++) Operator
*/



