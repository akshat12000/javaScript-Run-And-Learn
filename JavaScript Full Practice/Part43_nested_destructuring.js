// nested destructuring
const users = [
    {
        userId:1,
        firstName:'Akshat',
        gender:'Male'
    },
    {
        userId:2,
        firstName:'Lekhansh',
        gender:'Male'
    },
    {
        userId:3,
        firstName:'Preet',
        gender:'Male'
    }
];
const [user1,user2,{firstName:Fname,userId:id,gender}]=users;
console.log(user1);
console.log(user2);
console.log(id,Fname,gender);