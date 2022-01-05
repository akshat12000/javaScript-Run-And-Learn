console.log("Hello World!");
let firstName = "Akshat";
let lastName = "Bhatnagar";

const myFunction = function(){
    let var1 = "First Variable";
    let var2 = "Second Variable";
    console.log(var1);
    console.log(var2);
}

// This is the compilation phase :
//                   GLOBAL SCOPE
//      --------------------------------------
//      |  fname                             |
//      |  lname          myFunction         |
//      |                ------------        |   
//      |                |var1,var2 |        |
//      |                ------------        |
//      --------------------------------------