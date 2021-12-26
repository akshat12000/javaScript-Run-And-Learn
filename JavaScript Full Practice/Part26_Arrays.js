// intro to arrays --> reference type
// ordered collection of items

// how to create arrays
let fruits = ["Apple","Grapes","Mango","Banana"];
let numbers = [1,2,3,4];
let mixed = [1,2,2.3,"string",null,undefined];
let obj = {}; // object literal

console.log(fruits);
console.log(numbers);
console.log(mixed);
console.log(fruits[2]);
console.log(numbers[1]);

// array indexing --> index start with 0 and ends at array.length-1
fruits[2]="Guava"; // arrays are mutable!
console.log(fruits);
console.log(typeof fruits);
console.log(Array.isArray(fruits)); // tells whether fruits is array or not
console.log(Array.isArray(obj));
