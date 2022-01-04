// class keyword
// classes are fake internally they work as functions!

class CreateUser{
    constructor(firstName,lastName,email,age,address){
        console.log("Constructor Called!");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`
    }
    is18(){
        return this.age>=18;
    }
    func(a){
        console.log(a);
    }
}

// constructor will be invoked as soon as object is created using "new" keyword

const user1 = new CreateUser("akshat","bhatnagar","akshat@gmail.com",21,"my address");
const user2 = new CreateUser("lekhansh","bhatnagar","lekhansh@gmail.com",16,"my address");
const user3 = new CreateUser("vibhor","bhatnagar","vibhor@gmail.com",20,"my address");

console.log(user1);
console.log(user1.about());
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));
user1.func("Hello");

console.log(user2);
console.log(user2.about());
console.log(user2.is18());

console.log(user3);
console.log(user3.about());
console.log(user3.is18());
