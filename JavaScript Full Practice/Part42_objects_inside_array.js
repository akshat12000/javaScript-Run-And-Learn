// objects inside array
// very useful in real world applications

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
console.log(users);
for(let user of users){
    console.log(user);
}
