// event object
// refer to clickEvent.html

const allButtons = document.querySelectorAll(".my-buttons button");
allButtons.forEach((button)=>{
    button.addEventListener("click",function(event){
        console.log(event); // information object of the event
        console.log(event.currentTarget);
    });
});

// js Engine --> executes the javaScript line by line
// browser --> js Engine + WebApi 

// whenever we add an event listner to an element then,
// whenever browser comes to know that event is performed then 
// 1) browser will give callback function to js Engine
// 2) browser will also give the information(in the form of object) of that event along with the callback function
