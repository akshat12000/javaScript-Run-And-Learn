// closures example 4

function func(){
    let counter = 0;
    function myFunc(){
        if(counter<1){
            console.log("Hi! You Called Me!");
            counter++;
        }else{
            console.log("You Have Already Called Me Once!");
        }
    }
    return myFunc;
}
const myFunc = func();
myFunc();
myFunc();