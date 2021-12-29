// callback functions
// myFunc() is known as higher order function

function myFunc(callback){
    console.log(callback);
    callback("Lekhansh");
}

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`Your name is ${name}`);
}

myFunc(myFunc2);