// new keyword
function createUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName,this.age);
}

const user = new createUser("Akshat",21);
// 1) creates empty object (this = {})
// 2) return this
// 3) automatically assign __proto__  or [[Prototype]] with the function prototype 

console.log(user);
console.log(user.__proto__);

// constructor function
function CreateUser(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

// adding the userMethods function to prototype of createUser
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
CreateUser.prototype.is18 = function(){
    return this.age>=18;
}

const user1 = new CreateUser("akshat","bhatnagar","akshat@gmail.com",21,"my address");
const user2 = new CreateUser("lekhansh","bhatnagar","lekhansh@gmail.com",16,"my address");
const user3 = new CreateUser("vibhor","bhatnagar","vibhor@gmail.com",20,"my address");

console.log(user1);
console.log(user1.about());
console.log(user1.is18());

console.log(user2);
console.log(user2.about());
console.log(user2.is18());

console.log(user3);
console.log(user3.about());
console.log(user3.is18());