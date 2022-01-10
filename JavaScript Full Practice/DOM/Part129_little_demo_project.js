// Refer to little-demo.html
const mainButton = document.querySelector("button");
const body = document.body;
const header = document.querySelector("h1");

function randomColorGenerator(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

mainButton.addEventListener("click",()=>{
    const currentColor = randomColorGenerator();
    body.style.backgroundColor = currentColor;
    // console.log(r,g,b);
    header.textContent = `Current Color: ${currentColor}`;   
});