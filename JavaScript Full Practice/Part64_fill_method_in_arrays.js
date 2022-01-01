// fill method
// value, start, end(not included)

const myArray = new Array(10).fill(0);
console.log(myArray);

const array = [1,2,3,4,5,6,7,8];
array.fill(0,2,5); // it will change the original array
console.log(array);