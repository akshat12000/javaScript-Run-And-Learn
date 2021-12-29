// map method
const numbers = [2,5,6,1,7];
const users = [
    {firstName: "Akshat",age:21},
    {firstName: "Lekhansh",age:16},
    {firstName: "Yatharth",age:16},
    {firstName: "Vibhor",age:20}
];

const square = function(number){
    return number*number;
    // console.log(number*number);
};

const squareNumber = numbers.map(square); 
// map function always form a new array with values set according to callback function
console.log(squareNumber);

const cubicNumber = numbers.map((number,index)=>{
    return `index:${index}, ${number**3}`;
});
console.log(cubicNumber);

const userNames = users.map((user)=>{
    return user.firstName;
});
console.log(userNames);


