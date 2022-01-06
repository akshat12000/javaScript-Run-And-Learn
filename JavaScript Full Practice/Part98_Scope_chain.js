// Scope Chain and lexical environment

const lastName = "Bhatnagar"; // line 1
const printName = function(){  // line 2
    const firstName = "Akshat"; // line a
    console.log(firstName);  // line b
    console.log(lastName); // line c
}
printName(); // line 3

// First GEC will be pushed to CALL STACK
// In memory creation phase of GEC "this" = "window" object, "lastName" and "printName" will be uninitialized
// after execution of line 1, lastName = "Bhatnagar"
// after execution of line 2, function will be inititalized
// for line no. 3 a new FEC will be created and it is pushed to CALL STACK
// In local memory "argument" will be set to array like object and "firstName" is set to uninititalized
// after execution of line a, firstName = "Akshat"
// after execution of line b, firstName is printed
// after execution of line c, lastName is searched in the lexical(in which it is present) environment and then it gets printed
// after execution of line 3 first FEC is popped then GEC is popped from the CALL STACK.

// The concept in which a variable is searched continuosly in the lexical environment till it is found is known as scope chain