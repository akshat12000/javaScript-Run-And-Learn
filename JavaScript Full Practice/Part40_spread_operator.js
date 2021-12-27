// spread operator in arrays
const array1 = [1,2,3];
const array2 = [4,5,6];

const newArray = [...array1,...array2,7,8];
const spreadString = [..."abcdef"];

console.log(newArray);
console.log(spreadString);

// spread operator in objects
const obj = {
    key1:"value1",
    key2:"value2",
    key1:"value3"
};
console.log(obj); // in this last appearing key1's value will be considered
// Note: object's key should be unique and should appear only once 

const obj1 = {
    key1:"value1",
    key2:"value2"
};
const obj2 = {
    key1:"valueUnique",
    key3:"value3",
    key4:"value4"
};
const newObject = {...obj2,...obj1};
const newObject2 = {...obj1,...obj2,key100:"value100"};
const object = {..."abcdefghijklmnopqrstuvwxyz"};

console.log(newObject);
console.log(newObject2);
console.log(object);