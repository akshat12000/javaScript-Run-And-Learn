// call, apply and bind methods

// call
function hello(){
    console.log("hello world");
}
hello.call(); // calling the function same as hello()

const user1 = {
    firstName:"Akshat",
    age: 21,
    about: function(hobby,favMusician){
        console.log(this.firstName,this.age,hobby,favMusician);
    }
}
const user2 = {
    firstName:"Lekhansh",
    age: 16,
}
user1.about("guitar","hendricks"); // or user1.about.call(user1);
user1.about.call(); // undefined output
user1.about.call(user2,"piano","moazrt"); // printing the details of user2!!

// apply
user1.about.apply(user2,["abc","xyz"]);

// bind
const func = user1.about.bind(user1,"cde","hij");
func();