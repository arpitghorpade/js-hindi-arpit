// Two Types of dataTypes in js
// Primitive and non primitive

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//1st - DataType => primitive data type has 7 types
// Number, String, Boolean, Undefined, Null, Bigint, Symbol

// 2nd - DataType => Reference (non primitive)
// Objects, Array, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "arpit",
    age: 20,
}

const myFunction = function() {
    console.log("hello World");
}
console.log(typeof myObj);


// link => https://262.ecma-international.org/5.1/#sec-11.4.3


// ***************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myFullName = "arpitghorpade";

let anotherName = myFullName;
anotherName = "dynanesh";

console.log(myFullName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "arpit@google.com";

console.log(userOne.email);
console.log(userTwo.email);