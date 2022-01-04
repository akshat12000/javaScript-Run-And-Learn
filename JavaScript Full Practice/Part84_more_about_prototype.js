// more about prototype

let numbers = [1,2,3];
let numbers2 = new Array(1,2,3);
console.log(numbers,numbers2);
console.log(numbers2.__proto__);
console.log(Array.prototype);
console.log(Object.getPrototypeOf(numbers));

function hello(){
    console.log("hello");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push(1);
console.log(hello.prototype);