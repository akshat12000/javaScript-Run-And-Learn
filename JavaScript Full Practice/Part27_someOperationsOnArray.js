let fruits = ["apple","mango","grapes"];
console.log(fruits);

// array push, pop
fruits.push("banana");
console.log(fruits);

let poppedFruit=fruits.pop(); // remove from last
console.log(fruits);
console.log(`Popped fruit is ${poppedFruit}`);

// array shift, unshift
fruits.unshift("guava"); // add in the beginning
console.log(fruits);

let removedFruit=fruits.shift(); // remove from first
console.log(fruits);
console.log(`Removed fruit is ${removedFruit}`);

// Note: push and pop are faster than shift and unshift