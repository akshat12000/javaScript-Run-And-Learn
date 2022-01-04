// getters and setters
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        [this.firstName,this.lastName] = fullName.split(" ");
    }
}

const person1 = new Person("Akshat","Bhatnagar",21);
console.log(person1);
console.log(person1.fullName);
console.log(person1.firstName,person1.lastName,person1.age);
person1.fullName = "Preet Kothari";
console.log(person1);