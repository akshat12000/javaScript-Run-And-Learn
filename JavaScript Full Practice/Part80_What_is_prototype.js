// What is prototype?

const user = {key1:"value1"};

function hello(){
    console.log("hello world");
}
// javaScript function --> function + object

console.log(hello.name);

// you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties

// function provides us free space( in other words {}) and this object is called prototype
console.log(hello.prototype); // {}
// only functions provides prototype property!!

if(hello.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}

if(user.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "Happy birthday to you..."
};
console.log(hello.prototype);
console.log(hello.prototype.sing());