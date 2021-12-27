// how to iterate an object
const person = {
    name:"Akshat",
    age:21,
    hobbies:["programming","gaming"]
};

// for in loop
for(let key in person){
    console.log(`${key}: ${person[key]}`);
    // console.log(person.key) --> undefined
}

// Object.keys
console.log(Object.keys(person));
console.log(Array.isArray(Object.keys(person)));

for(let key of Object.keys(person)){
    console.log(key,person[key]);
}
