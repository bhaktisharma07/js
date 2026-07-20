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





// Stack ( Primitive ), Heap ( Non _ Primitive ) memoryl

let myYoutubename = "bhaktisings"

let anotherName = myYoutubename 
anotherName = "sharmasisters"

console.log(myYoutubename) ; 
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
// this goes into heap

let userTwo = userOne

userTwo.email = "bhakti@google.com"

console.log(userOne.email);
console.log(userTwo.email);

