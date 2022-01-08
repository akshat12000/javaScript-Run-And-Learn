// get and set attributes

// get 
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

// set 
link.setAttribute("href","https://google.com");
console.log(link.getAttribute("href"));