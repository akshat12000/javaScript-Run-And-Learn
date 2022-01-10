// Events behind the scenes
// Refer to clickEvent.html

console.log("script start!!!");

const allButtons = document.querySelectorAll(".my-buttons button");
allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let num = 0;
        for(let i=0;i<=1000000000;i++){ // providing the delay
            num+=i;
        }
        console.log(e.currentTarget.textContent,num);
    });
});
let outerVar = 0;
for(let i=0;i<=10000000;i++){
    outerVar+=i;
}
console.log("value of outer variable is",outerVar);
console.log("script end!!!");

// Browser consists of js Engine and WebApi
// js Engine has the GEC where the code will execute
// As an activity tracker of the events browser uses WebApis and if event is fired the it gives the info of the event as well as the callback to the GEC
// GEC will continue to execute, Now, as soon as CALL STACK becomes idle (after popping GEC)
// Eventloop which was watching the queue(called callback queue) of the events that were fired will now allow them to return the info as well as the callback one by one

