// closures example 1

function printFullName(firstName,lastName){ // line 1
    console.log(arguments)
    function printName(){               // line a
        console.log(firstName,lastName);  // line A     
    }
    return printName;   // line b
}

const res = printFullName("Akshat","Bhatnagar"); // line 2
res(); // line 3

// First GEC is pushed to CALL STACK
// In memory creation phase of GEC, this = window, "res" is uninitialized and "printName" is initialized to function
// line no. 1 is already done then after execution of line 2 FEC is pushed to CALL STACK
// then in the local memory phase of FEC printName is initialized to function (after line a executes!) and "arguments" is initialized to array like object with values "Akshat" and "Bhatnagar"
// on executing line b "printName" gets returned (Note:both the arguments(firstName,lastName) are also returned!!)
// now FEC is popped from the CALL STACK
// again on executing line 3 FEC is pushed to CALL STACK
// now after execution of line A firstName and lastName gets printed (which were also returned during line b!)
// Now FEC gets popped then GEC gets popped from the CALL STACK.

// When function also takes arguments from it's lexical environment with it while it gets returned is known as concept of closures.