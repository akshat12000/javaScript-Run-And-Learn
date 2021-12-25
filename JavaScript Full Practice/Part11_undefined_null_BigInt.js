// undefined
let firstName;
var lastName;
console.log(typeof firstName);
console.log(typeof lastName);

firstName = "Akshat";
console.log(typeof firstName,firstName);

// const constant;  --> error we have to assign some value while declaring a constant
// console.log(typeof constant);

// null
let myVariable = null;
console.log(myVariable,typeof myVariable);
// Note: typeof null results in a object which is a bug in javaScript!

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
let myNumber = BigInt(123);
let sameMyNumber = 123n;
let num=124;
console.log(typeof myNumber,typeof sameMyNumber);
console.log(myNumber+sameMyNumber);
// console.log(myNumber+num); error --> convert to bigint explicitly!
