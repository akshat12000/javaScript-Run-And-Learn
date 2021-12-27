// objects --> reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
const person = {
    name:"Akshat",
    age:21,
    hobbies:["programming","gaming"]
};
console.log(person,typeof person);

// how to access data from objects
console.log(person.name,person["name"]);
console.log(person.age,person["age"]);
console.log(person.hobbies,person["hobbies"]);

// how to add key value pair to objects
person.gender="Male";
person["education"]="Btech"
console.log(person);
