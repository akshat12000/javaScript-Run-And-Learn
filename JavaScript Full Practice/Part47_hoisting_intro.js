// hoisting

// calling before declaration allowed for function declaration (Hoisting)
hello();
function hello(){
    console.log("hello world");
}

// hi(); --> error in case of function expression
const hi = function(){
    console.log("hello world");
}

// console.log(hel); --> undefined for 'var' and error for 'const' and 'let'
var hel = "hello world";
console.log(hel);