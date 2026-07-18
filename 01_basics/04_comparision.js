// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1); // Returns true or false

// console.log("2" > 1);
// console.log("02" > 1);

// JavaScript converts the string into a number before comparing


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
== and comparison operators work differently

Comparison operators (>, <, >=, <=)
convert null to 0

So:
null > 0   // false
null == 0  // false
null >= 0  // true
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// undefined is not converted to a number here
// These comparisons always return false

// In JS == and === are different

// strict check (===)

console.log("2" === 2); // false because the data types are different


