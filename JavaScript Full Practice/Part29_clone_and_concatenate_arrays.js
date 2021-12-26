// how to clone array
let array1 = ["item1","item2"];
let array2 = array1; // it will not clone the array1
// cloning of array
let array3 = ["item1","item2"];
let array4 = array1.slice(0);
let array5 = [].concat(array1);
let array6 = [...array1]; // ... is spread operator
let array7 = [...array1,"item3","item4"];

console.log(array1===array2);
console.log(array1===array3);
console.log(array1===array4);
console.log(array1===array5);
console.log(array1===array6);

array1.push("item3");
console.log(array1,array2,array3,array4,array5,array6,array7);

// how to concatenate two arrays
arr1=[1,2,3];
arr2=[4,5,6];
arr3=[].concat(arr1,arr2);
arr4=[...arr1,...arr2];
console.log(arr3,arr4);