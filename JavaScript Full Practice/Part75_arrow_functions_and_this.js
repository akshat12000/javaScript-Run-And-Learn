// arrow functions and this

const user1 = {
    firstName: "Akshat",
    age:21,
    about:()=>{
        console.log(this);
        console.log(this.firstName,this.age);
    }
};

// arrow function takes "this" from surrounding and one level up not from the object that is calling it
user1.about(); 
user1.about.call(user1); // no effect