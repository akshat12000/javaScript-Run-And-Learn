// intro to events
// click

// Three ways to add events
// 1) directly giving attribute to the html element inside html file

// 2) selecting the element and providing the event in javaScript
// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     console.log("You clicked me");
// } 
// // this method works but we can't assign more than once to btn.onclick
// console.log(btn);

// 3) using the addEventListener method --> mostly used
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",()=>{
    console.log("You clicked me");
});
