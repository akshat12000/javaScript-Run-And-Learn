// Create functions to create multiple objects

// function
// 1) this function will create an object
// 2) add key value pair
// 3) return the object

function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 = function(){
        return this.age>=18;
    }
    return user;
}

const user1 = createUser("akshat","bhatnagar","akshat@gmail.com",21,"my address");
console.log(user1);
console.log(user1.about());
console.log(user1.is18());