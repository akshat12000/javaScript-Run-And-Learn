// difference between dot and bracket notation
const key = "email";
const person = {
    name:"Akshat",
    age:21,
    "person hobbies":["programming","gaming"]
};
console.log(person["person hobbies"]);
// console.log(person.person hobbies); --> error

person[key]="akshat174@gmail.com"; // same cannot be done using dot operator
// or person[`${key}`] = "akshat174@gmail.com"
console.log(person);
