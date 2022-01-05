// Note: both let and const are hoisted!

// let
// console.log(firstName); error --> it gets allocated in global memory but it will be unitialized
// console.log(typeof firstName); --> error
let firstName = "Akshat";
console.log(firstName);

// const
// console.log(lastName); error --> it gets allocated in global memory but it will be unitialized
// console.log(typeof firstName); --> error
const lastName = "Bhatnagar";
console.log(lastName);

console.log(typeof fullName); // undefined