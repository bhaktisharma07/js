// Array Basics

// An array stores multiple values in a single variable.
const myArr = [0, 1, 2, 3, 4, 5]

// Arrays can store different data types.
// const myArr = [0, 1, 2, 3, 4, 5, true, "bhakti"]

const myHeroes = ["spiderman", "ironman"]

// Another way to create an array
const myArr2 = new Array(1, 2, 3, 4)

// Accessing the first element using its index
console.log(myArr[0])


/*
JavaScript arrays create a shallow copy
A shallow copy shares the same reference
If you change the copied object,
the original object may also change.
*/

/*
A deep copy creates a completely new copy
Changing the copied object does not affect the original object
*/


// Array Methods 

// Adds an element to the end of the array
myArr.push(6)
myArr.push(7)

// Removes the last element
myArr.pop()

// Adds an element at the beginning of the array
myArr.unshift(9)

// Removes the first element
myArr.shift()

// Checks whether an element exists in the array
console.log(myArr.includes(9))

// Returns the index of the given element
console.log(myArr.indexOf(3))

// Converts the array into a string
const newArr = myArr.join()

console.log(myArr)
console.log(newArr)


// Slice & Splice 

console.log("A", myArr)

// Returns part of the array
// Does NOT change the original array
const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)


// Removes elements from the array
// Changes the original array
const myn2 = myArr.splice(1, 3)

console.log(myn2)
console.log("C", myArr)


/*
- Arrays store multiple values.
- Arrays can store different data types.
- Index starts from 0.
- push() adds an element at the end.
- pop() removes the last element.
- unshift() adds an element at the beginning.
- shift() removes the first element.
- includes() checks if an element exists.
- indexOf() returns the index of an element.
- join() converts an array into a string.
- slice() does not change the original array.
- splice() changes the original array.
*/