// Function expression
const singHappyBirthday = function(){  // we can also use let or var but const is preferred
    console.log("Happy birthday to you .....");
}

const sumTwoNumbers = function(a,b){
    return a+b;
}

const isEven = function(number){
    return number%2===0;
}

const findInArray = function(arr,target){
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