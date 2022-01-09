// this keyword inside event listener callback
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click",function(){
    console.log("You clicked me");
    console.log("value of this");
    console.log(this); // with callback as arrow function it will show the window object!
});