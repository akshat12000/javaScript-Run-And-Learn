// Note: Strings are immutable in javaScript!

// trim()
let firstName = "   Akshat    ";
console.log(firstName.length);
firstName = firstName.trim()
console.log(firstName,firstName.length);

// toUpperCase()
let fName = "akshat";
fName = fName.toUpperCase()
console.log(fName);

// toLowerCase()
let Fname = "AKSHAT";
Fname = Fname.toLowerCase()
console.log(Fname);

// slice(startIndex,endIndex) --> endIndex is not included
let newString = firstName.slice(0,4);
console.log(newString);
