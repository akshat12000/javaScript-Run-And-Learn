// Practice with click events
// Refer to clickEvent.html
// On clicking any button will change it's background color to yellow and text color to grey

const allButtons = document.querySelectorAll(".my-buttons button");
allButtons.forEach((button)=>{
    button.addEventListener("click",function(e){
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "grey";
    })
})
