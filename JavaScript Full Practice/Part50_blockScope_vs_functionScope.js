// block scope vs function scope

// let and const are block scope
{
    let firstName = "Akshat";
    // firstName can be accessed in this block only!
    console.log(firstName);
}
// console.log(firstName); --> error
{
    const firstName = "Lekhansh";
    console.log(firstName);
}
// console.log(firstName); --> error

const firstName = "Preet";
console.log(firstName);

// var is function scope
{
    var fName = "Vibhor";
}
{
    console.log(fName);
}
console.log(fName);

function myApp(){
    if(true){
        var fname = "Yatharth";
        console.log(fname);
    }
    console.log(fname);
}
myApp();