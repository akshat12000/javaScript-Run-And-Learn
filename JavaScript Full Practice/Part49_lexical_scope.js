// lexical scope
// try commenting out different myVars and observe the output

const myVar="value0";
function myApp(){
    const myVar = "value1";
    function myFunc(){
        const myVar = "value2";
        const myFunc2 = ()=>{
            console.log("Inside myFunc",myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}
myApp();