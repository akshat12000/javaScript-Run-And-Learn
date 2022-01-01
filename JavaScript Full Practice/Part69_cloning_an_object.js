// clone using Object.assign

// memory
const obj = {
    key1:"value1",
    key2:"value2"
};
const obj2 = obj; // both will point to same object
const obj3 = {...obj}; // obj3 is different object
const obj4 = Object.assign({},obj); // obj4 is different object
obj.key3="value3";
console.log(obj,obj2,obj3,obj4);
