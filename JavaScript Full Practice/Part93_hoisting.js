// hoisting

// before execution of first line "firstName","lastName","fullName" and "myFunction" were intitialized in the global memory
// during creation phase in global execution context that's why here we can access them before declaring them in the code.
// This concept is known as hoisting.

console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(fullName);

function myFunction(){
    console.log("This is my function");
}

var firstName = "Akshat";
var lastName = "Bhatnagar";
var fullName = firstName + " " + lastName;
console.log(fullName);