// Function execution context

let foo = "foo"; // line 1
console.log(foo); // line 2
function getFullName(firstName,lastName){        // line 3
    console.log(arguments); // line a
    let myVar = "var inside func"; // line b
    console.log(myVar); // line c
    const fullName = firstName + " " + lastName; // line d
    return fullName; // line e
}

const personName = getFullName("akshat","bhatnagar"); // line 4
console.log(personName); // line 5

// GLOBAL EXECUTION CONTEXT(GEC)

//                        Code Execution Phase                         Memory Creation Phase
//                   ______________________________________________________________________________________________
//   |     |        |        lines of execution     | window:{big object}                                          |
//   |     |        | 1. foo = "foo"                | this: window                                                 |             
//   |     |        | 2. print foo                  | foo: uninitialized --> foo (after step 1)                    |
//   | FEC |        | 3. pass on                    | getFullName: function                                        |
//   | GEC |        | 4. function execution context | personName: uninitialized --> akshat bhatnagar (after step e)|
//   |_____|        | 5. print personName           |                                                              |             
//                  |_______________________________|______________________________________________________________|
//  CALL STACK

// FUNCTION EXECUTION CONTEXT(FEC)

//             Code Execution                               Local Memory Creation
//   ________________________________________________________________________________________________
//  |      lines of execution          | argument:[...array like object]                             |
//  | a) print arguments               | firstName: akshat                                           |
//  | b) myvar = "var inside func"     | lastName: bhatnagar                                         |
//  | c) print myVar                   | myvar: uninitialized --> var inside func (after line b)     |
//  | d) fullName = "akshat bhatnagar" | fullname: uninitialized --> akshat bhatnagar (after line d) |
//  | e) return fullName               |                                                             |
//  |__________________________________|_____________________________________________________________|
