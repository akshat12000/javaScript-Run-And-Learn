// Click event on multiple buttons
// refer to clickEvent.html file 

const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

allButtons.forEach((button)=>{
    button.addEventListener("click",function(){
        console.log(this.textContent);
        // same as console.log(button.textContent); but callback function should not be an arrow function
    });
});