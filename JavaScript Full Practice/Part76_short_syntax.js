// short syntax
const user1 = {
    firstName: "Akshat",
    age: 21,
    about(){
        console.log(this.firstName,this.age);
    }
};

user1.about();