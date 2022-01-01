// find method

const myArray = ["hello","cat","dog","lion"];

function isLength(string){
    return string.length === 3;
}

const ans = myArray.find(isLength); // returns first occurence of the string that satisfies the isLength function
console.log(ans);

const users = [
    {userId: 1, userName: "Akshat"},
    {userId: 2, userName: "Lekhansh"},
    {userId: 3, userName: "Vibhor"},
    {userId: 4, userName: "Yatharth"},
];

const myUser = users.find((user)=>{
    return user.userId === 3;
});
console.log(myUser);