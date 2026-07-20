const name = "bhakti"
const repoCount = 4

// Old way of joining strings (not recommended)
console.log(name + repoCount + " Value ");

// Modern way using Template Literals
// ${} ke andar variable directly use kar sakte hain.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// Creates a String object
const gameName = new String('bhakti-hc-com')

// Gets character at index 0
console.log(gameName[0]);

// Shows all methods available for String (only for learning)
console.log(gameName.__proto__);


// Returns total number of characters
console.log(gameName.length);

// Converts string to UPPERCASE
// Original string does NOT change
console.log(gameName.toUpperCase());

// Returns character at index 2
console.log(gameName.charAt(2));

// Returns index(position) of 't'
console.log(gameName.indexOf('t'));


// Gets part of the string
// Starts from index 0 and ends before index 4
const newString = gameName.substring(0, 4);
console.log(newString);


// slice() also gets part of the string
// Difference: slice() supports negative indexes
// Negative index means counting starts from the end
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);


const newStringOne = "   bhakti   "

// Prints string with spaces
console.log(newStringOne);

// Removes extra spaces from start and end
console.log(newStringOne.trim());


const url = "https://bhakti.com/bhakti%27sharma"

// Replaces "%27" with "-"
console.log(url.replace('%27', '-'));

// Checks whether "shagun" exists in the string
// Returns true or false
console.log(url.includes('shagun'));


// Splits the string wherever "-" is found
// Returns an Array
console.log(gameName.split('-'));


/*
Summary:

- Template literals use ${} to insert variables.
- length gives total characters.
- toUpperCase() converts text to uppercase.
- charAt() gets a character using its index.
- indexOf() finds the position of a character.
- substring() gets part of a string (end index is not included).
- slice() also gets part of a string and supports negative indexes.
- trim() removes extra spaces.
- replace() replaces text with another text.
- includes() checks if text exists in a string.
- split() converts a string into an array.
*/