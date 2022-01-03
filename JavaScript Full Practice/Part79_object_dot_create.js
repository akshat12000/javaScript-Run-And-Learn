// Object.create

const obj1 = {
    key1: "value1",
    key2: "value2"
};

// __proto__ , [[Prototype]] --> these are assigned whenever object is created using Object.create()
// prototype

const obj2 = Object.create(obj1); // {}
obj2.key3 = "value3";
obj2.key2 = "unique";
console.log(obj2);
console.log(obj2.key3,obj2.key1); // will print both of them successfully
console.log(obj2.key2);
console.log(obj2.__proto__);

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age>=18;
    }
};

// tackling the previous problem 
function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
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