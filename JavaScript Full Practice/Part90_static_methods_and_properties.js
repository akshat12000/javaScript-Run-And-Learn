// static methods and properties

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static desc = "Static property of class Person";
    static classInfo(){
        return "This is person class";
    }
    eat(){
        return `${this.firstName} is eating`;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        [this.firstName,this.lastName] = fullName.split(" ");
    }
}

const person1 = new Person("Akshat","Bhatnagar",21);
// person1.classInfo(); --> error
console.log(Person.classInfo());
// console.log(person1.desc); --> undefined
console.log(Person.desc);