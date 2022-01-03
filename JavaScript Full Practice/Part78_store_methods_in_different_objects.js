// Store methods in different objects
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age>=18;
    }
};

function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("akshat","bhatnagar","akshat@gmail.com",21,"my address");
const user2 = createUser("lekhansh","bhatnagar","lekhansh@gmail.com",16,"my address");
const user3 = createUser("vibhor","bhatnagar","vibhor@gmail.com",20,"my address");

console.log(user1);
console.log(user1.about());
console.log(user1.is18());

console.log(user2);
console.log(user2.about());
console.log(user2.is18());

console.log(user3);
console.log(user3.about());
console.log(user3.is18());