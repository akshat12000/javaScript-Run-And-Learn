// nested if else

// winning number 19
// 19 --> then your guess is right
// 17 --> too low
// 20 --> too high

let winningNumber = 19;
let userGuess = +prompt("Guess a Number");
console.log(userGuess,typeof userGuess);

if(userGuess===winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess<winningNumber){
        console.log("too low!!");
    }else{
        console.log("too high!!");
    }
}