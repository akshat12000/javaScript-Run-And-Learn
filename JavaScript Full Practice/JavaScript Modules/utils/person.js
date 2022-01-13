class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

export class Person2{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

export default Person; // we can now remove curly braces while importing
// and there should be only one export default statement for a file!