// ********************** DATES **********************

// Creates a Date object with current date and time
let myDate = new Date()

// Different ways to display date
console.log(myDate.toString());          // Full date and time
console.log(myDate.toDateString());      // Only date in readable format
console.log(myDate.toLocaleString());    // Date and time in local format

// Date object is of type "object"
console.log(typeof myDate);


// Different ways to create a custom date

// year, monthIndex (0 = Jan), day
// let myCreatedDate = new Date(2026, 0, 27)

// year, monthIndex, day, hours, minutes
// let myCreatedDate = new Date(2026, 0, 23, 5, 3)

// MM-DD-YYYY format
// let myCreatedDate = new Date("01-14-2026")

// YYYY-MM-DD format (ISO format)
let myCreatedDate = new Date("2026-01-15")

// Displays custom date in local format
console.log(myCreatedDate.toLocaleString());


// ********************** TIMESTAMP **********************

// Returns current timestamp in milliseconds
let myTimeStamp = Date.now()

// Current timestamp (milliseconds since 1 Jan 1970)
console.log(myTimeStamp);

// Timestamp of custom date
console.log(myCreatedDate.getTime());

// Current timestamp in seconds
console.log(Math.floor(Date.now() / 1000));


// ********************** DATE METHODS **********************

// Current date object
let newDate = new Date()

console.log(newDate);

// getMonth() returns month index (0-11)
// इसलिए +1 करते हैं ताकि January = 1 हो जाए
console.log(newDate.getMonth() + 1);

// getDay() returns day of week
// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
console.log(newDate.getDay());

// Template Literal Example
// `${newDate.getDate()} and the time`


// ********************** LOCALE OPTIONS **********************

// Customize the output using locale options

newDate.toLocaleString('default', {
    weekday: "long"   // Displays full weekday name (e.g., Monday)
})