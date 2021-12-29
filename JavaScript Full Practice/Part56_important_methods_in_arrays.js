// important array methods
// forEach

const numbers = [4,2,6,1,5,7];
const users = [
    {firstName: "Akshat",age:21},
    {firstName: "Lekhansh",age:16},
    {firstName: "Yatharth",age:16},
    {firstName: "Vibhor",age:20}
];

function myFunc(number,index){
    console.log(`index is ${index} and number is ${number}`)
}

numbers.forEach(myFunc);
numbers.forEach((number,index)=>{
    console.log(`Second way --> index is ${index} and number is ${number}`);
});
numbers.forEach((number)=>{
    console.log(number*2);
});

users.forEach(function(user){
    console.log(user);
});
