// hasOwnProperty

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

// it will print all the keys including the keys from __proto__
for(let key in user1){
    console.log(key);
}

console.log("\n");

// it will print all the keys that were present in the object itself
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}