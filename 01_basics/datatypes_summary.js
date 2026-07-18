// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3
 
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 762598295692365n



// Reference ( Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "bhakti",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //symbol
console.log(typeof bigNumber); // bigint
console.log(typeof anotherId); // symbol


/*
Summary:
- Primitive types store a single value
- Non-primitive types store collections or functions
- typeof is used to check the data type
- Every Symbol is unique, even if the values are the same
*/

