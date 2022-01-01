// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set([1,2,3,3,5,6]);
const characters = new Set("akshat");
const arr = ["item1","item2"];
console.log(numbers,typeof numbers);
console.log(numbers[1]);
console.log(characters);

numbers.add(4);
console.log(numbers);
characters.add("A");
console.log(characters);

numbers.add(arr);
numbers.add(["item1","item2"]);
// both will get added since both the arrays are stored in the heap separately!
console.log(numbers);

console.log(numbers.has(1));
console.log(characters.has("B"));

// Sets are iterable using "for of" loop
for(let character of characters){
    console.log(character);
}

// To extract unique elements from the array
const myArray = [1,2,3,4,4,5,5,6,6];
const uniqueElements = new Array(...new Set(myArray));
console.log(uniqueElements);
console.log(uniqueElements.length);