// Functions

// Function declaration
function singHappyBirthday(){
    console.log("Happy birthday to you .....");
}

function sumTwoNumbers(a,b){ // a,b are called parameters
    return a+b; // returns the value of a+b
}

function isEven(number){
    return number%2===0;
}

function findInArray(arr,target){
    // this functions returns the index of the element if target is found in the array else returns -1
    for(let i = 0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

// Function calling
singHappyBirthday();
singHappyBirthday();
console.log(isEven(4));
console.log(isEven(5));
console.log(sumTwoNumbers(4,9),typeof sumTwoNumbers(5,6));
// sumTwoNumbers(4,9) --> here 4 and 9 are called arguments
// Note: anything added with undefined will result in NaN(not a number).
console.log(findInArray([1,2,3,4,5],3));
console.log(findInArray([1,2,3,4,5],9));
