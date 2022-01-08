// textContent and innerText

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent); // it will give all the text content whether it is visible or not!
console.log(mainHeading.innerText); // it will give only those text which are visible in the browser

// changing the text content of the html element with id = "main-heading" 
mainHeading.textContent = "This is something else"
console.log(mainHeading.textContent);