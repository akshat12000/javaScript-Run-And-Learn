// understand callback

function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}

myFunc(()=>{
    console.log("Function is doing task 2");
});

function getTwoNumbersAndAdd(num1,num2,onSuccess,onFailure){
    if(typeof num1 === "number" && typeof num2 === "number"){
        onSuccess(num1,num2);
    }else{
        onFailure();
    }
}

function addTwoNumbers(num1,num2){
    console.log(`Sum of ${num1} and ${num2} is: `,num1+num2);
}

function generateError(){
    console.log("Wrong Data Type!");
}

getTwoNumbersAndAdd(2,3,addTwoNumbers,generateError);
getTwoNumbersAndAdd("4","5",addTwoNumbers,generateError);