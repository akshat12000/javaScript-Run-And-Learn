// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%

// function can return functions

function outerFunction(){
    function innerFunction(){
        console.log("Hello World");
    }
    return innerFunction;
}
const ans = outerFunction();
console.log(ans);
ans();
