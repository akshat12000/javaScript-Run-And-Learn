// javaScript is a synchronous and single threaded programming language
// means that if current line is executing then, the lines after this line will not start executing.

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Akshat";
console.log(firstName);

// 1) compilation phase
    // a) Tokenizing/Lexing
    // b) Parsing
    // c) Code Generation

// 2) code execution

// why compilation?
// --> Early Error Checking
// --> Determining Appropriate Scope for Variables

// How javaScript code executes?
    // In javaScript code executes inside execution context

// what is global execution context?
// 1) Creation Phase --> "firstName" will be created and initialized to "undefined" and value of "this" is set to "window" 
// 2) Code Execution Phase

// what is local execution context?
// closures

