// methods --> function inside an object

function personInfo(){
    console.log(`Person name is ${this.firstName} and person age is ${this.age}`);
    console.log(this);
}

const person1 = {
    firstName: "Akshat",
    age:21,
    about:personInfo
};// value of "this" is decided at runtime
 

const person2 = {
    firstName: "Lekhansh",
    age:16,
    about:personInfo
};

const person3 = {
    firstName: "Vibhor",
    age:20,
    about:personInfo
};

person1.about();
// "this" means object which is calling the function (here person1 is calling about)
person2.about();
// "this" means object which is calling the function (here person2 is calling about)
person3.about();
// "this" means object which is calling the function (here person3 is calling about)
