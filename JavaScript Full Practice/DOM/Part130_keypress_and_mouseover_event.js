// Keypress and Mouseover events

const body = document.body;
const mainButton = document.querySelector(".btn-headline");

body.addEventListener("keypress",(e)=>{
    console.log(e);
}); // it will show the info about the key pressed on the keyboard

mainButton.addEventListener("mouseover",()=>{
    console.log("Mouse over event occurred!!");
}); // whenever we mouse over on our button then it will get triggered

// mouseleave --> whenever mouse gets off from our element the this event gets triggered