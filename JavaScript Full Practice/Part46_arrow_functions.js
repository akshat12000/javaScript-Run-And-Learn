// Arrow functions
const singHappyBirthday = ()=>{  // we can also use let or var but const is preferred
    console.log("Happy birthday to you .....");
}

const sumTwoNumbers = (a,b)=>{
    return a+b;
}

const isEven = number => number%2===0; 
// this is also a valid arrow function but parameter should be only one to write without () and only one return statement should be there to write without {}


const findInArray = (arr,target)=>{
    for(let i = 0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

// Function Calling
singHappyBirthday();
singHappyBirthday();
console.log(isEven(4));
console.log(isEven(5));
console.log(sumTwoNumbers(4,9),typeof sumTwoNumbers(5,6));
console.log(findInArray([1,2,3,4,5],3));
console.log(findInArray([1,2,3,4,5],9));