// iterables
// we can use "for of" loop on iterables
// string , array are iterables

const firstName = "Akshat";
for(let char of firstName){
    console.log(char);
}

const items = ["item1","item2","item3"];
for(let item of items){
    console.log(item);
}

const users = {"key1":"value1","key2":"value2"};
// for(let user of users){
//     console.log(user);  --> error
// }

// array like object 
// those objects which have length property and their elements can be acessed using index
// example --> string
const fName = "Lekhansh";
console.log(fName.length);
console.log(fName[3]);
