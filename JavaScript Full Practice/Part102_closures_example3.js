// closures example 3

function myFunction(power){
    return function(num){
        console.log(num**power);
    }
}

const square = myFunction(2);
const cube = myFunction(3);
square(5);
cube(7);