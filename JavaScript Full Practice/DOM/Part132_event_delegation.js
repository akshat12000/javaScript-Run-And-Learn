// Event Delegation
// Refer to event-bubbling-capturing.html file

const grandparent = document.querySelector(".grandparent");

grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
}); // even if we have added an event on grandparent but by firing through child will also makes it triggered
// This is called event delegation


