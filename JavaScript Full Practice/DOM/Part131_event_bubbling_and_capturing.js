// event bubbling / event propagation
// event capturing 
// event delegation
// Refer to event-bubbling-capturing.html file

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;

// event bubbling occurs here because when we click on child then all the events including itself and it's parent gets triggered
child.addEventListener("click",()=>{
    console.log("You clicked on child");
});

parent.addEventListener("click",()=>{
    console.log("You clicked on parent");
});

grandparent.addEventListener("click",()=>{
    console.log("You clicked on grandparent");
});

body.addEventListener("click",()=>{
    console.log("You clicked on body");
});

// capturing the events --> passing the third argument inside the addEventListner
child.addEventListener("click",()=>{
    console.log("Captured Child");
},true);

parent.addEventListener("click",()=>{
    console.log("Captured Parent");
},true);

grandparent.addEventListener("click",()=>{
    console.log("Captured Grandparent");
},true);

body.addEventListener("click",()=>{
    console.log("Captured body");
},true);

// Flow of the Output (on clicking the child)
// Cycle will go in a anti-clockwise direction

//               body
//      cap.--> / 
//        Grandparent   body 
//    cap.--> /         / --> bubbling
//         parent  Grandparent
// cap.-->  /         / --> bubbling
//       child --> parent 
//          bubbling

// Note: Here cap. denotes the capturing