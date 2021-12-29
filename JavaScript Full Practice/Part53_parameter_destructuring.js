// param destructuring

// object
// react

const person = {
    firstName: "Akshat",
    gender: "Male"
};

function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);