// primitive vs reference data types

// primitive types
let num1=6;
let num2=num1;
console.log("value is num1 is",num1);
console.log("value is num2 is",num2);
num1++;
console.log("after incrementing num1");
console.log("value is num1 is",num1);
console.log("value is num2 is",num2);

// reference types
let array1 = ["item1","item2"]; // ["item1","item2"] is stored in the heap with array1 as pointer to it
let array2 = array1; // both array1 and array2 will be pointing to same location
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after pushing element to array1");
console.log("array1",array1);
console.log("array2",array2);
// Hence any change made in array1 will be reflected in the array2 as well since they both are 
// pointing to same location