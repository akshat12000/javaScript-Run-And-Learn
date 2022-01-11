// setInterval
// Refer to setInterval.html

// console.log("script start");

// setInterval(()=>{ // this is also provided by the browser's Web APIs
//     console.log(Math.random());
// },1000); // this will give a random number in every one second

// console.log("script end");

const body = document.body;
const button = document.querySelector("button");

const interval = setInterval(()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background = rgb;
},1000); // will set background with a random color in every second!

button.addEventListener("click",function(){
    clearInterval(interval); // on clicking the button, color changing will stop
    button.textContent = body.style.background;
});

// Note: setInterval also gives an id