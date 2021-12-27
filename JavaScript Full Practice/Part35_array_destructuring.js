// array destructuring
const myArray = ["value1","value2","value3","value4"];
const arr= ["val1"];

// let val1 = myArray[0];
// let val2 = myArray[1];

let [val1,val2,...myNewArray]=myArray;
let [myv1,myv2]=arr;
let [v1, ,v2]=myArray;

console.log(myArray,val1,val2);
console.log(myNewArray);
console.log(arr,myv1,myv2);
console.log(myArray,v1,v2);