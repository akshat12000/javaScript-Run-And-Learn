const user1 = {
    firstName: "Akshat",
    age:21,
    about: function(){
        console.log(this);
        console.log(this.firstName,this.age);
    }
}

// don't do this mistake
const myFunc = user1.about;
myFunc(); // "this" here is window object so be careful while calling!!

const myFunc2 = user1.about.bind(user1);
myFunc2(); // now correct!